import { IOrderReduxState } from "@/services/api-redux-types/order.types"
import { createSlice } from "@reduxjs/toolkit"

let initialState: IOrderReduxState = {
    value: {
        all_orders:[]
    }
}

export const OrderSlice = createSlice({
    name: "OrderSlice",
    initialState,
    reducers: {
        storeAllOrders: (state, action) => {
            state.value.all_orders = action.payload
        }
    }
})

export const { storeAllOrders } = OrderSlice.actions;
export default OrderSlice.reducer