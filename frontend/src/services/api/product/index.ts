import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { baseUrl } from "@/constants"
import { IResponse } from "@/services/api-redux-types"
import { IProduct } from "@/services/api-redux-types/product.types"
import { storeAllProducts } from "@/services/redux/reducers/product"



export const ProductApi = createApi({
    reducerPath:"ProductApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getAllProducts: builder.query({
            queryFn: async(args, {dispatch}, _extraOptions, baseQuery)=>{
                let response = await baseQuery({
                    url:"/products/all",
                    method:"GET",
                })

                if (response.data){
                    const {success,message,data:productData} = response.data as IResponse<IProduct[]>

                    if(success==true){
                       await dispatch(storeAllProducts(productData))
                    }
                    return {data:{success,message, data:productData}}
                    
                }

                return {data:{success:false, message:"Something went wrong. Please try again", data:{}}}
            }
        })
    })
})


export const {useGetAllProductsQuery} = ProductApi