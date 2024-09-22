import { IAuthReduxState } from "@/services/api-redux-types/auth.types"
import { createSlice } from "@reduxjs/toolkit"

let initialState: IAuthReduxState = {
    value: {
        current_user: {
            token: "",
            usernanme: "",
            id: ""
        }
    }
}

export const AuthSlice = createSlice({
    name: "AuthSlice",
    initialState,
    reducers: {
        storeCurrentUser: (state, action) => {
            state.value.current_user = action.payload
        }
    }
})

export const { storeCurrentUser } = AuthSlice.actions;
export default AuthSlice.reducer