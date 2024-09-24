export enum OrderStatusEnum{
    Pending = "Pending",
    Processed = "Processed",
    Cancelled = "Cancelled",
    Completed = "Completed"
}

export enum DeliveryStatusEnum{
    Delivered = "Delivered",
    InTransit = "InTransit",
    Pending = "Pending",

}

export enum PaymentStatusEnum{
    Pending = "Pending",
    Completed = "Completed"
}

export interface IOrder{
    _id?:string, 
    order_number?:string,
    order_status?:string, 
    delivery_status?:string,
    products?:IProductOrder[],
    expected_delivery_date?: Date,
    date_ordered?: Date,
    total_cost?:number,
    payment_status?:string, 
    currency?:number 
}

export interface IProductOrder{
    quantity:number,
    product_id: string
}