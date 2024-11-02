import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    value: {
        current_row:{}
    }
}

export const RowSlice = createSlice({
    name: "RowSlice",
    initialState,
    reducers: {
        storeCurrentRow: (state, action) => {
            state.value.current_row = action.payload
        }
    }
})

export const { storeCurrentRow } = RowSlice.actions;
export default RowSlice.reducer