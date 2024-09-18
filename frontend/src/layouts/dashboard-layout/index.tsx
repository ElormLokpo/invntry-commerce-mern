import { SideNav } from "@/components/side-nav"
import { Outlet } from "react-router-dom"

export const DashboardLayout = ()=>{
    return(
        <div className="h-full grid grid-cols-16">
            <div className="bg-gray-900 text-white col-span-2">
                <SideNav />
            </div>
            <div className="col-span-14">
                <Outlet />
            </div>
        </div>
    )
}