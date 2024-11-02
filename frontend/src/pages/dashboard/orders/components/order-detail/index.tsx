import { CloseButton } from "@/components/button"
import { useSelector } from "react-redux"
import { motion as m } from "framer-motion"
import { SlideInTop } from "@/animations"


export const OrderDetail = () => {
    const orderItem = useSelector((state: any) => state.row.value.current_row)
    

    const handleContainerClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
    }

    return (
        <m.div
            variants={SlideInTop}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={handleContainerClick}
            className="grid grid-cols-3 bg-white w-[45rem] rounded">
           
        </m.div>
    )
}