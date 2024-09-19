import { Modal } from "@/components/modal"
import { SideNav } from "@/components/side-nav"
import { ModalContext } from "@/context/modal"
import { IModal } from "@/context/modal/types"
import { useContext } from "react"
import { Outlet } from "react-router-dom"

export const DashboardLayout = () => {
    const {modal_state} = useContext(ModalContext) as IModal;
    return (
        <>
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