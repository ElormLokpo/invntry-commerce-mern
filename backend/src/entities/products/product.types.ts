export enum ProductCategoryEnum {
    Electronics = "Electronics",
    FashionApparel = "Fashion & Apparel",
    HomeKitchen = "Home & Kitchen",
    HealthBeauty = "Health & Beauty",
    SportsOutdoors = "Sports & Outdoors",
    ToysGames = "Toys & Games",
    BooksStationery = "Books & Stationery",
    Automotive = "Automotive",
    BabyKids = "Baby & Kids",
    GroceriesFood = "Groceries & Food"
}


export enum ProductStockStatus {
    OutOfStock = "Out of Stock",
    InStock = "In stock"
}


export interface IProduct{
    product_name:string, 
    quantity_in_stock:number,
    quantity_sold:number,
    unit_price:number, 
    expected_revenue:number,
    current_revenue:number, 
    category:string, 
    weight:number, 
    height:number,
    stock_status:string, 
    total_orders:number
}