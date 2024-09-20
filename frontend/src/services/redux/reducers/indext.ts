import {combineReducers} from "@reduxjs/toolkit"
import AuthReducer from "./auth"
import { AuthApi } from "@/services/api/auth"
import { PingApi } from "@/services/api/ping"

export const rootReducer = combineReducers({
    auth: AuthReducer,
    [PingApi.reducerPath] : PingApi.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer 
})