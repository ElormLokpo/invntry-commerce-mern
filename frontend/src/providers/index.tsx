import { RouterProvider } from "react-router-dom"
import { router } from "../routes"
import { ModalProvider } from "./modal-provider"
import { Provider as ReduxProvider } from "react-redux"
import { store } from "@/services/redux/store"

export const RootProvider = () => {
    return (
        <>
            <ReduxProvider store={store}>
                <ModalProvider>
                    <RouterProvider router={router} />
                </ModalProvider>
            </ReduxProvider>
        </>
    )
}