import {model, Schema} from "mongoose";
import { ProductCategoryEnum, ProductStockStatus } from "./product.types";


const ProductSchema = new Schema({
    product_name:{
        type:String, 
        required:true
    },
    quantity_in_stock:{
        type:Number, 
        required:true
    },
    quantity_sold:{
        type:Number, 
        required:true
    },
    unit_price:{
        type:Number, 
        required:true
    },
    expected_revenue:{
        type:Number, 
        
    },
    current_revenue:{
        type:Number, 
    },
    category:{
        type:String, 
        enum: Object.values(ProductCategoryEnum)
    },
    weight:{
        type:Number, 
        
    },
    height:{
        type:Number, 
        
    },
    stock_status:{
        type:String, 
        enum: Object.values(ProductStockStatus)
    },
    total_orders:{
        type:Number, 
        
    }
})

export const ProductModel = model("ProductModel", ProductSchema);