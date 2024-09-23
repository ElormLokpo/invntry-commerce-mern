export enum ProductCategoryEnum {
    Electronics = "Electronics",
    Fashion = "Fashion",
    Home = "Home", 
    Kitchen = "Kitchen",
    Health = "Health",
    Beauty = "Beauty",
    Sport = "Sports",
    Outdoors = "Outdoors",
    Toys = "Toys",
    Books = "Books",
    Kids = "Kids",
    Groceries = "Groceries",
    Furniture = "Furniture",
    Office = "Office",
    MensWear = "Men's Wear",
    Clothing = "Clothing",
    Dresses ="Dresses"
}


export enum ProductStockStatus {
    OutOfStock = "Out of Stock",
    InStock = "In Stock"
}


export interface IProduct{
    _id?:string,
    product_name:string, 
    quantity_in_stock:number,
    description?:string,
    quantity_sold?:number,
    currency?:string,
    unit_price:number, 
    expected_revenue?:number,
    current_revenue?:number, 
    category?:string[], 
    weight?:number, 
    height?:number,
    stock_status?:string, 
    total_orders?:number
}

export interface IProductReduxState{
    value:{
        all_products: IProduct[] 
    }
}

export interface IProductRequestDTO{
    product_name:string, 
    description?:string,
    quantity_in_stock:number,
    currency?:string,
    unit_price:number, 
    category?:string[], 
    weight?:number, 
    height?:number,
    
}

