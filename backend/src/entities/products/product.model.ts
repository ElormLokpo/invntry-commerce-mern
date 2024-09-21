import {model, Schema} from "mongoose";
import { ProductCategoryEnum, ProductStockStatus } from "./product.types";
import {v4 as guid} from "uuid"

const ProductSchema = new Schema({
    _id:{
        type:String
    },
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
    },
    currency:{
        type:String, 

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
        type:[String], 
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

ProductSchema.pre("save",async function(){
    this._id = guid();
})

export const ProductModel = model("ProductModel", ProductSchema);