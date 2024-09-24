import {model, Schema} from "mongoose";
import {v4 as guid} from "uuid";
import { DeliveryStatusEnum, OrderStatusEnum, PaymentStatusEnum } from "./order.types";


export const OrderSchema =  new Schema({
    _id:{
        type:String
    },
    order_number:{
        type:String
    },
    order_status:{
        type:String, 
        enum: Object.values(OrderStatusEnum),
        default:"Pending"
    },
    delivery_status:{
        type:String, 
        enum: Object.values(DeliveryStatusEnum),
        default:"Pending"
    },
    products:{
        type: [Object]
    },
    expected_delivery_date:{
        type:Date, 
        default: Date.now
    },
    date_ordered:{
        type:Date, 
        default: Date.now
    },
    total_cost:{
        type:Number
    }, 
    payment_status:{
        type:String, 
        enum: Object.values(PaymentStatusEnum),
        default: "Pending"
    },
    currency:{
        type:String, 
        default:"GHS"
    }
})

OrderSchema.pre("save", async function(){
    this._id = guid();
    
    this.order_number = "ORD" + Math.floor(1000000 + Math.random() * 9000000).toString();

})

export const OrderModel = model("OrderModel", OrderSchema)