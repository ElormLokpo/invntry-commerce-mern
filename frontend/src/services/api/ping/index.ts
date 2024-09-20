import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { baseUrl } from "@/constants"

export const PingApi = createApi({
    reducerPath:"PingApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        ping: builder.query({
            queryFn: async(args, {dispatch}, _extraOptions, baseQuery)=>{
                let response = await baseQuery({
                    url:"/ping",
                    method:"GET",
                    body:args
                })
                console.log("BASE URL", baseUrl)

                console.log(response)

                return {data:{success:false, message:"Something went wrong. Please try again"}}
            }
        })
    })
})


export const {usePingQuery} = PingApi