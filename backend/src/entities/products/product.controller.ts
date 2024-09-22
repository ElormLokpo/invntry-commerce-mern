import { NextFunction, Request, Response, Router } from "express";
import { ProductModel } from "./product.model";
import { IController } from "../../interfaces/controller.interface";
import { GenerateResponse } from "../../helpers/response.generator";
import { IProduct } from "./product.types";


export class ProductController implements IController {
    public path = "/products"
    public router = Router()


    constructor() {
        this.initializeActions()
    }

    private initializeActions() {
        this.router.get(`${this.path}/all`, this.GetAllProducts.bind(this))
        this.router.get(`${this.path}/find`, this.SearchProductByName.bind(this))
        this.router.get(`${this.path}/filter`, this.FilterProduct.bind(this))
        this.router.post(`${this.path}/add`, this.AddProduct)
        this.router.patch(`${this.path}/update/:id`, this.UpdateProduct)
        this.router.delete(`${this.path}/delete/:id`, this.DeleteProduct)


    }

    private async ProductQueryMisc() {
        let limit = 25;
        let total_number_products = await ProductModel.countDocuments();
        let total_number_pages = Math.ceil(total_number_products / limit);

        return { limit, total_number_pages }
    }

    private async GetAllProducts(req: Request, res: Response, next: NextFunction) {

        let { limit, total_number_pages } = await this.ProductQueryMisc();
        let page = parseInt(req.query.page as string) - 1 || 0;
        let skip = page * limit;
        let product_query = await ProductModel
            .find()
            .skip(skip)
            .limit(limit)
        let response = GenerateResponse(true, "Product query successful", product_query, total_number_pages)
        res.status(200).json(response).end()
        next()
    }

    private async SearchProductByName(req: Request, res: Response, next: NextFunction) {
        let product_name_search = req.query.search
        

        let { limit, total_number_pages } = await this.ProductQueryMisc();
        let page = parseInt(req.query.page as string) - 1 || 0;
        let skip = page * limit;

        let product_query = await ProductModel
            .find({ product_name: { $regex: product_name_search, $options: "i" } })
            .skip(skip)
            .limit(limit);
       
        let response = GenerateResponse(true, "Product query successful", product_query, total_number_pages)
        res.status(200).json(response)
        next();
    }

    private async FilterProduct(req: Request, res: Response, next: NextFunction) {
        let {category, stock_status, max_price, min_price, search} = req.query;

        if(category && !Array.isArray(category)){
            category = [category as string]
        }

        if(stock_status && !Array.isArray(stock_status)){
            stock_status = [stock_status as string]
        }

        let { limit, total_number_pages } = await this.ProductQueryMisc();
        let page = parseInt(req.query.page as string) - 1 || 0;
        let skip = page * limit;

        let query:any = {};


        if(search){
            query.product_name = {$regex:search, $options:"i"}
        }

        if(category){
            query.category = {$in:category};

        }
        if(stock_status){
            query.stock_status = {$in:stock_status}
        }
        if(max_price){
            query.unit_price = {...query.unit_price, $lte:max_price}
        }
        if(min_price){
            query.unit_price = {...query.unit_price, $gte:min_price}
        }

        let product_query = await ProductModel
            .find(query)
            .skip(skip)
            .limit(limit);
        let response = GenerateResponse(true, "Product query successful", product_query, total_number_pages)
        res.status(200).json(response)
        next();
    }



    private async AddProduct(req: Request, res: Response, next: NextFunction) {
        let req_body = req.body as IProduct;
        let {product_name,quantity_in_stock,unit_price} = req_body;

        if(!product_name || !quantity_in_stock || !unit_price){
            let response = GenerateResponse(false, "Fields required: Product Name, Quantity In Stock and Unit Price", {})
            res.status(200).json(response)
            next()
        }

        //handle errors for enums

        let product_query = await ProductModel.findOne({product_name});
        if(product_query){
            let response = GenerateResponse(false, "Product name already exists", {})
            res.status(200).json(response)
            next()
        }else{
            
            req_body.expected_revenue = req_body.unit_price * req_body.quantity_in_stock 
            let product_mutation = await ProductModel.create(req_body);

            let response = GenerateResponse(true, "Product added successfully", product_mutation)
            res.status(200).json(response)
            next()
        }
     }

    private async UpdateProduct(req: Request, res: Response, next: NextFunction) {
        let req_body = req.body as IProduct;
        let id = req.params.id

        let product_query = await ProductModel.findById(id);
        if(!product_query){
            let response = GenerateResponse(false, "Product does not exist", {})
            res.status(200).json(response)
            next()
        }else{
            
            let product_mutation = await ProductModel.findByIdAndUpdate(id, req_body,{new:true});
            let response = GenerateResponse(true, "Product updated successfully", product_mutation)
            res.status(200).json(response)
            next()
        }
    }

    private async DeleteProduct(req: Request, res: Response, next: NextFunction) {
        let id = req.params.id

        let product_query = await ProductModel.findById(id);
        if(!product_query){
            let response = GenerateResponse(false, "Product does not exist", {})
            res.status(200).json(response)
            next()
        }else{
            
            let product_mutation = await ProductModel.findByIdAndDelete(id);
            let response = GenerateResponse(true, "Product updated successfully", product_mutation)
            res.status(200).json(response)
            next()
        }
    }


}