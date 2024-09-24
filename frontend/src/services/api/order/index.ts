import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseUrl } from "@/constants"
import { IResponse, IResponseDTO } from "@/services/api-redux-types"
import { IOrder, IOrderRequestDTO } from "@/services/api-redux-types/order.types"
import { storeAllOrders } from "@/services/redux/reducers/order"



export const OrderApi = createApi({
    reducerPath: "OrderApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getAllOrders: builder.query({
            queryFn: async (args, { dispatch }, _extraOptions, baseQuery) => {
                let response = await baseQuery({
                    url: "/orders/all",
                    method: "GET",
                })

                if (response.data) {
                    const { success, message, data: orderData } = response.data as IResponse<IOrder[]>

                    if (success == true) {
                        await dispatch(storeAllOrders(orderData))
                    }
                    return { data: { success, message, data: orderData } }

                }

                return { data: { success: false, message: "Something went wrong. Please try again", data: {} } }
            }
        }),
        addOrder: builder.mutation<IResponseDTO, IOrderRequestDTO>({
            queryFn: async (args, { dispatch }, _extraOptions, baseQuery) => {
                let response = await baseQuery({
                    url: "/orders/add",
                    method: "POST",
                    body: args
                })

                if (response.data) {
                    const { success, message } = response.data as IResponse<IOrder>

                    if (success == true) {
                        await dispatch(OrderApi.endpoints.getAllOrders.initiate(undefined))
                    }
                    return { data: {message, success}}

                }

                return { data: {message:"Something went wrong", success:false}}
            }
        }),
        deleteOrder: builder.mutation<IResponseDTO, string>({
            queryFn: async (args, { dispatch }, _extraOptions, baseQuery) => {
                let response = await baseQuery({
                    url: `/orders/delete/${args}`,
                    method: "DELETE",
                    
                })

                if (response.data) {
                    const { success, message } = response.data as IResponse<any>

                    if (success == true) {
                        await dispatch(OrderApi.endpoints.getAllOrders.initiate(undefined))
                    }
                    return { data: {message, success}}

                }

                return { data: {message:"Something went wrong", success:false}}
            }
        })
    })
})


export const { useGetAllOrdersQuery, useAddOrderMutation, useDeleteOrderMutation } = OrderApi