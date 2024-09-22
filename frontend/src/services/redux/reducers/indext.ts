import {combineReducers} from "@reduxjs/toolkit"
import AuthReducer from "./auth"
import ProductReducer from "./product"
import { AuthApi } from "@/services/api/auth"
import { PingApi } from "@/services/api/ping"
import { ProductApi } from "@/services/api/product"

export const rootReducer = combineReducers({
    auth: AuthReducer,
    product: ProductReducer,
    [PingApi.reducerPath] : PingApi.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [ProductApi.reducerPath] : ProductApi.reducer 
})