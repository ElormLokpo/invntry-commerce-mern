import { NextFunction, Request, Response, Router } from "express";
import { ProductModel } from "./product.model";
import { IController } from "../../interfaces/controller.interface";
import { GenerateResponse } from "helpers/response.generator";


export class ProductController implements IController {
    public path = "/products"
    public router = Router()


    constructor() {
        this.initializeActions()
    }

    private initializeActions() {
        this.router.get(`${this.path}/all`, this.GetAllProducts),
        this.router.get(`${this.path}/search`, this.SearchProductByName)
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

    }

    private async UpdateProduct(req: Request, res: Response, next: NextFunction) {

    }

    private async DeleteProduct(req: Request, res: Response, next: NextFunction) {

    }


}