import { CloseButton } from "@/components/button"
import { useSelector } from "react-redux"
import { motion as m } from "framer-motion"
import { SlideInTop } from "@/animations"


export const ProductDetail = () => {
    const productItem = useSelector((state: any) => state.row.value.current_row)
    let image_url = "https://picsum.photos/seed/picsum/1366/768"

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
            <div className="col-span-2 py-2 pl-2">
                <div className="mb-3">
                    <img src={image_url} className="rounded" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                    <div>
                        <img src={image_url} className="rounded" />

                    </div>
                    <div>
                        <img src={image_url} className="rounded" />

                    </div>
                    <div>
                        <img src={image_url} className="rounded" />

                    </div>
                </div>
            </div>
            <div className="p-2">
                <div className="flex justify-end mb-2">
                    <CloseButton />
                </div>
                <div className="mb-3">

                    <p>{productItem.product_name}</p>
                </div>

                <div className="mb-3">
                    <p className="text-[0.7rem] font-semibold">Description:</p>
                    <p className="text-xs text-justify leading-5">{productItem.description}</p>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="">
                        <p className="text-[0.7rem] font-semibold">Qty in stock:</p>
                        <p className="text-xs ">{productItem.quantity_in_stock}</p>
                    </div>
                    <div className="">
                        <p className="text-[0.7rem] font-semibold">Unit Price:</p>
                        <p className="text-xs ">{productItem.unit_price}</p>
                    </div>
                    <div className="">
                        <p className="text-[0.7rem] font-semibold">Stock Status:</p>
                        <p className="text-xs ">{productItem.stock_status}</p>
                    </div>
                </div>


                <div className="grid grid-cols-3 gap-2 mb-2">
                    <div className="">
                        <p className="text-[0.7rem] font-semibold">Weight(kg):</p>
                        <p className="text-xs ">{productItem.weight}</p>
                    </div>
                    <div className="">
                        <p className="text-[0.7rem] font-semibold">Height(kg):</p>
                        <p className="text-xs ">{productItem.height}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <div className="">
                        <p className="text-[0.7rem] font-semibold">Category:</p>

                        <p className="text-xs ">{productItem.category.join(" - ")}</p>



                    </div>

                </div>

            </div>
        </m.div>
    )
}