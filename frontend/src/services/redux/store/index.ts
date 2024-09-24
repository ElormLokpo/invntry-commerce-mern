import {configureStore} from "@reduxjs/toolkit"
import { rootReducer } from "../reducers/indext"
import { AuthApi } from "@/services/api/auth"
import { PingApi } from "@/services/api/ping"
import { ProductApi } from "@/services/api/product"
import { OrderApi } from "@/services/api/order"


export const store = configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(PingApi.middleware,AuthApi.middleware, ProductApi.middleware, OrderApi.middleware)
    
}) 