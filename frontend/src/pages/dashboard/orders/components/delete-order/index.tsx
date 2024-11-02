import { CloseButton } from "@/components/button"
import { motion as m } from "framer-motion"
import { SlideInTop } from "@/animations"
import { useContext, useEffect } from "react"
import { ModalContext } from "@/context/modal"
import { IModal } from "@/context/modal/types"
import { useDeleteOrderMutation } from "@/services/api/order"

export const DeleteOrder = ({ orderItem }: { orderItem: any }) => {
    const {setModalState} = useContext(ModalContext) as IModal;
    const [deleteOrder,{isLoading}] = useDeleteOrderMutation()

    const handleContainerClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
    }

    const handleCancel = ()=>{
        setModalState(false)
    }

    const handleDelete = async ()=>{
        const data = await deleteOrder(orderItem._id);
        location.reload();

    }

    return (
        <m.div
            variants={SlideInTop}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={handleContainerClick}
            className="bg-white w-[24rem] rounded p-2">



            <p className="text-sm mb-2">Are you sure you want to delete <span className="underline font-semibold">{orderItem.order_name}</span> order?</p>

            <div className="flex gap-2 justify-end">
                <button onClick={handleCancel} className="text-xs rounded border p-1 border-gray-600 text-gray-600">Cancel</button>
                <button onClick={handleDelete} className="text-xs rounded border p-1 border-red-600 text-red-600">Delete</button>
            </div>
        </m.div>
    )
}