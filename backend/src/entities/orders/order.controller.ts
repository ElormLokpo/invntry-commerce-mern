import { NextFunction, Request, Response, Router } from "express";
import { OrderModel } from "./order.model";
import { IController } from "../../interfaces/controller.interface";
import { GenerateResponse } from "../../helpers/response.generator";
import { IOrder} from "./order.types";
import { ProductModel } from "../products/product.model";



export class OrderController implements IController {
    public path = "/orders"
    public router = Router()


    constructor() {
        this.initializeActions()
    }

    private initializeActions() {
        this.router.get(`${this.path}/all`, this.GetAllOrders.bind(this))
        this.router.get(`${this.path}/find`, this.SearchOrderByName.bind(this))
        this.router.get(`${this.path}/filter`, this.FilterOrder.bind(this))
        this.router.post(`${this.path}/add`, this.AddOrder)
        this.router.patch(`${this.path}/update/:id`, this.UpdateOrder)
        this.router.delete(`${this.path}/delete/:id`, this.DeleteOrder)


    }

    private async OrderQueryMisc() {
        let limit = 25;
        let total_number_orders = await OrderModel.countDocuments();
        let total_number_pages = Math.ceil(total_number_orders / limit);

        return { limit, total_number_pages }
    }

    private async GetAllOrders(req: Request, res: Response, next: NextFunction) {

        let { limit, total_number_pages } = await this.OrderQueryMisc();
        let page = parseInt(req.query.page as string) - 1 || 0;
        let skip = page * limit;
        let order_query = await OrderModel
            .find()
            .skip(skip)
            .limit(limit)
        let response = GenerateResponse(true, "Order query successful", order_query, total_number_pages)
        res.status(200).json(response).end()
        next()
    }

    private async SearchOrderByName(req: Request, res: Response, next: NextFunction) {
        let order_name_search = req.query.search


        let { limit, total_number_pages } = await this.OrderQueryMisc();
        let page = parseInt(req.query.page as string) - 1 || 0;
        let skip = page * limit;

        let order_query = await OrderModel
            .find({ order_name: { $regex: order_name_search, $options: "i" } })
            .skip(skip)
            .limit(limit);

        let response = GenerateResponse(true, "Order query successful", order_query, total_number_pages)
        res.status(200).json(response)
        next();
    }

    private async FilterOrder(req: Request, res: Response, next: NextFunction) {
        let { category, stock_status, max_price, min_price, search } = req.query;

        if (category && !Array.isArray(category)) {
            category = [category as string]
        }

        if (stock_status && !Array.isArray(stock_status)) {
            stock_status = [stock_status as string]
        }

        let { limit, total_number_pages } = await this.OrderQueryMisc();
        let page = parseInt(req.query.page as string) - 1 || 0;
        let skip = page * limit;

        let query: any = {};


        if (search) {
            query.order_name = { $regex: search, $options: "i" }
        }

        if (category) {
            query.category = { $in: category };

        }
        if (stock_status) {
            query.stock_status = { $in: stock_status }
        }
        if (max_price) {
            query.unit_price = { ...query.unit_price, $lte: max_price }
        }
        if (min_price) {
            query.unit_price = { ...query.unit_price, $gte: min_price }
        }

        let order_query = await OrderModel
            .find(query)
            .skip(skip)
            .limit(limit);
        let response = GenerateResponse(true, "Order query successful", order_query, total_number_pages)
        res.status(200).json(response)
        next();
    }



    private async AddOrder(req: Request, res: Response, next: NextFunction) {
        let req_body = req.body as IOrder;
        let total_cost = 0;
        if(req_body.products.length > 0 ){
           
            for (const product of req_body.products ){
                let {unit_price, stock_status, quantity_in_stock} = await ProductModel.findById(product.product_id).select("unit_price stock_status quantity_in_stock")
                
                if(stock_status==="Out of Stock" || quantity_in_stock ===0){
                    continue;
                }

                total_cost += unit_price * product.quantity
            
            }
            req_body.total_cost = total_cost;
        }else{
            let response = GenerateResponse(false, "Error: Order without products", {})
            res.status(200).json(response)
            next()
        }
        //handle errors for enums
        let order_mutation = await OrderModel.create(req_body);

        let response = GenerateResponse(true, "Order added successfully", order_mutation)
        res.status(200).json(response)
        next()

    }

    private async UpdateOrder(req: Request, res: Response, next: NextFunction) {
        let req_body = req.body as IOrder;
        let id = req.params.id

        let order_query = await OrderModel.findById(id);
        if (!order_query) {
            let response = GenerateResponse(false, "Order does not exist", {})
            res.status(200).json(response)
            next()
        } else {

            let order_mutation = await OrderModel.findByIdAndUpdate(id, req_body, { new: true });
            let response = GenerateResponse(true, "Order updated successfully", order_mutation)
            res.status(200).json(response)
            next()
        }
    }

    private async DeleteOrder(req: Request, res: Response, next: NextFunction) {
        let id = req.params.id

        let order_query = await OrderModel.findById(id);
        if (!order_query) {
            let response = GenerateResponse(false, "Order does not exist", {})
            res.status(200).json(response)
            next()
        } else {

            let order_mutation = await OrderModel.findByIdAndDelete(id);
            let response = GenerateResponse(true, "Order deleted successfully", order_mutation)
            res.status(200).json(response)
            next()
        }
    }


}