import { FaOpencart } from "react-icons/fa6";
import image from "@/assets/side-nav.jpg"
import { NavLink } from "react-router-dom"
import { IProps } from "./types";
import { MdOutlineSpaceDashboard, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbDeviceImacDollar } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";

const SideNavItem = ({content, icon}:IProps) => {
    return <NavLink to="/" className="text-sm flex mb-2 hover:bg-lime-800 py-2 px-2 rounded items-center gap-2"> {icon} {content}</NavLink>
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
                        <SideNavItem icon={<MdOutlineSpaceDashboard />} content="Home" />
                        <SideNavItem icon={<MdOutlineProductionQuantityLimits />} content="Products" />
                        <SideNavItem icon={<TbDeviceImacDollar />} content="Orders" />
                        <SideNavItem icon={<CiSettings />} content="Settings" />

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