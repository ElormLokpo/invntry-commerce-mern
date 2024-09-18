import {RouterProvider} from "react-router-dom"
import { router } from "../routes"

export const RootProvider = ()=>{
    return(
        <>
            <RouterProvider router={router}/>
        </>
    )
}