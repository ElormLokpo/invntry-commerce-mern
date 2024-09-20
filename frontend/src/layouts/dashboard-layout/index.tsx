import { Modal } from "@/components/modal"
import { SideNav } from "@/components/side-nav"
import { ModalContext } from "@/context/modal"
import { IModal } from "@/context/modal/types"
import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { Toaster } from "sonner";
import { useSelector } from "react-redux"

export const DashboardLayout = () => {
    const {modal_state} = useContext(ModalContext) as IModal;
    const current_user = useSelector((state:any)=>state.auth.value)
    const navigate = useNavigate();

    useEffect(()=>{
        // if(!current_user.token){
        //     navigate("/")
        // }
    })
    return (
        <>
            <Toaster />
            {
                modal_state && <Modal />
            }
            <div className="h-full grid grid-cols-16">
                <div className="bg-gray-900 text-white col-span-2">
                    <SideNav />
                </div>
                <div className="col-span-14">
                    
                    <Outlet />
                </div>
            </div>
        </>
    )
}