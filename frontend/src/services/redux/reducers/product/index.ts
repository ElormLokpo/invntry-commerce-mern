import { IProductReduxState } from "@/services/api-redux-types/product.types"
import { createSlice } from "@reduxjs/toolkit"

let initialState: IProductReduxState = {
    value: {
        all_products:[]
    }
}

export const ProductSlice = createSlice({
    name: "ProductSlice",
    initialState,
    reducers: {
        storeAllProducts: (state, action) => {
            state.value.all_products = action.payload
        }
    }
})

export const { storeAllProducts } = ProductSlice.actions;
export default ProductSlice.reducer