import { FaOpencart } from "react-icons/fa6";
import image from "@/assets/side-nav.jpg"
import { NavLink } from "react-router-dom"
import { IProps } from "./types";
import { MdOutlineSpaceDashboard, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbDeviceImacDollar } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";

const SideNavItem = ({content, icon, to}:IProps) => {
    let default_style = "text-sm flex mb-2 hover:bg-lime-900 hover:px-3 transition-all py-2 px-2 rounded items-center gap-2"
    let active_style = "text-sm flex mb-2 bg-lime-800 py-2 px-2 rounded items-center gap-2"
  
    
    return <NavLink to={to as string} className={default_style}> {icon} {content}</NavLink>
}

export const SideNav = () => {
    return (
        <div className="h-full" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}>
            <div className="wrapper-dark-blur flex flex-col justify-between px-2 py-5 h-full">
                <div>
                    <div className="flex gap-2 items-center mb-10">
                        <div className="bg-lime-500 text-black p-1.5 rounded">
                            <p><FaOpencart /></p>
                        </div>
                        <p className="font-bold">Quick<span>Cart</span></p>
                    </div>

                    <div>
                        <SideNavItem icon={<MdOutlineSpaceDashboard />} content="Home" to="/admin/dashboard"/>
                        <SideNavItem icon={<MdOutlineProductionQuantityLimits />} content="Products" to="/admin/dashboard/products" />
                        <SideNavItem icon={<TbDeviceImacDollar />} content="Orders" to="/admin/dashboard/orders"/>
                        <SideNavItem icon={<CiSettings />} content="Settings" to="/admin/auth"/>

                    </div>
                </div>

                <div className="text-sm">
                    <p>admin@gmail.com</p>
                    <button>Logout</button>

                </div>
            </div>

        </div>
    )
}