import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { baseUrl } from "@/constants"
import { IResponse } from "@/services/api-redux-types"
import { IAuthRequest, IAuthResponse, IAuthUserResponse } from "@/services/api-redux-types/auth"
import { storeCurrentUser } from "@/services/redux/reducers/auth"



export const AuthApi = createApi({
    reducerPath:"AuthApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        loginUser: builder.mutation<IAuthUserResponse, IAuthRequest>({
            queryFn: async(args, {dispatch}, _extraOptions, baseQuery)=>{
                let response = await baseQuery({
                    url:"/auth/login",
                    method:"POST",
                    body:args
                })

                if (response.data){
                    const {success,message,data:authData} = response.data as IResponse<IAuthResponse>

                    if(success==true){
                       await dispatch(storeCurrentUser(authData))
                    }
                    return {data:{success,message}}
                    
                }

                return {data:{success:false, message:"Something went wrong. Please try again"}}
            }
        })
    })
})


export const {useLoginUserMutation} = AuthApi