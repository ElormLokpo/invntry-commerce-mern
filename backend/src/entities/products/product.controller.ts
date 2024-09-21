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
        res.status(200).json(response)
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

        res.status(200)
    }

    private async FilterProduct(req: Request, res: Response, next: NextFunction) {

        let { limit, total_number_pages } = await this.ProductQueryMisc();
        let page = parseInt(req.query.page as string) - 1 || 0;
        let skip = page * limit;

    //     let product_query = await ProductModel
    //         .find()
    //         .where("category")
    //         .in([])
    //         .where("stock_status")
    //         .in([])
    //         .skip(skip)
    //         .limit(limit);
    //     let responnse = GenerateResponse(true, "Product query successful", product_query, total_number_pages)
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