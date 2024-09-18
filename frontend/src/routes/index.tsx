import { createBrowserRouter, RouteObject } from "react-router-dom";
import { AuthPage } from "@/pages/auth";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import { HomePage } from "@/pages/dashboard/home";


const admin_routes: RouteObject[] = [
    {
        path: "/",
        element: <AuthPage />
    },
    {
    path: "admin/auth",
    element: <AuthPage />
    },
    {
    path:"admin/dashboard",
    element:<DashboardLayout />,
    children:[
        {
            path:"",
            element:<HomePage />
        }
    ]
   

    }]

export const router = createBrowserRouter([...admin_routes])