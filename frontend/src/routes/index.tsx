import { createBrowserRouter, RouteObject } from "react-router-dom";
import { AuthPage } from "@/pages/auth";


const admin_routes: RouteObject[] = [{
    path: "admin/auth",
    element: <AuthPage />
}]

export const router = createBrowserRouter([...admin_routes])