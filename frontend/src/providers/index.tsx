import { RouterProvider } from "react-router-dom"
import { router } from "../routes"
import { ModalProvider } from "./modal-provider"

export const RootProvider = () => {
    return (
        <>
            <ModalProvider>
                <RouterProvider router={router} />
            </ModalProvider>
        </>
    )
}