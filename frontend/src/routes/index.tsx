import { createBrowserRouter, RouteObject } from "react-router-dom";
import { AuthPage } from "@/pages/auth";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import { HomePage } from "@/pages/dashboard/home";
import { ProductPage } from "@/pages/dashboard/products";
import { AddProdcut } from "@/pages/dashboard/products/components/add-product";


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
        },
        {
            path:"products",
            element:<ProductPage />
        },
        {
            path:"products/add",
            element: <AddProdcut />
        }
    ]
   

    }]

export const router = createBrowserRouter([...admin_routes])