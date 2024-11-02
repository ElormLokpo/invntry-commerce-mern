import {combineReducers} from "@reduxjs/toolkit"
import AuthReducer from "./auth"
import ProductReducer from "./product"
import RowReducer from "./row"
import OrderReducer from "./order"
import { AuthApi } from "@/services/api/auth"
import { PingApi } from "@/services/api/ping"
import { ProductApi } from "@/services/api/product"
import { OrderApi } from "@/services/api/order"

export const rootReducer = combineReducers({
    auth: AuthReducer,
    product: ProductReducer,
    row: RowReducer,
    order: OrderReducer,
    [PingApi.reducerPath] : PingApi.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [ProductApi.reducerPath] : ProductApi.reducer,
    [OrderApi.reducerPath] : OrderApi.reducer 
})