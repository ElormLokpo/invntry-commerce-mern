import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseUrl } from "@/constants"
import { IResponse, IResponseDTO } from "@/services/api-redux-types"
import { IProduct, IProductRequestDTO } from "@/services/api-redux-types/product.types"
import { storeAllProducts } from "@/services/redux/reducers/product"



export const ProductApi = createApi({
    reducerPath: "ProductApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            queryFn: async (args, { dispatch }, _extraOptions, baseQuery) => {
                let response = await baseQuery({
                    url: "/products/all",
                    method: "GET",
                })

                if (response.data) {
                    const { success, message, data: productData } = response.data as IResponse<IProduct[]>

                    if (success == true) {
                        await dispatch(storeAllProducts(productData))
                    }
                    return { data: { success, message, data: productData } }

                }

                return { data: { success: false, message: "Something went wrong. Please try again", data: {} } }
            }
        }),
        addProduct: builder.mutation<IResponseDTO, IProductRequestDTO>({
            queryFn: async (args, { dispatch }, _extraOptions, baseQuery) => {
                let response = await baseQuery({
                    url: "/products/add",
                    method: "POST",
                    body: args
                })

                if (response.data) {
                    const { success, message } = response.data as IResponse<IProduct>

                    if (success == true) {
                        await dispatch(ProductApi.endpoints.getAllProducts.initiate(undefined))
                    }
                    return { data: {message, success}}

                }

                return { data: {message:"Something went wrong", success:false}}
            }
        }),
        deleteProduct: builder.mutation<IResponseDTO, string>({
            queryFn: async (args, { dispatch }, _extraOptions, baseQuery) => {
                let response = await baseQuery({
                    url: `/products/delete/${args}`,
                    method: "DELETE",
                    
                })

                if (response.data) {
                    const { success, message } = response.data as IResponse<any>

                    if (success == true) {
                        await dispatch(ProductApi.endpoints.getAllProducts.initiate(undefined))
                    }
                    return { data: {message, success}}

                }

                return { data: {message:"Something went wrong", success:false}}
            }
        })
    })
})


export const { useGetAllProductsQuery, useAddProductMutation, useDeleteProductMutation } = ProductApi