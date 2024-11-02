import { Table } from "@/components/table"
import { EditDelete } from "@/components/table/components/edit-delete"
import { IProduct } from "@/services/api-redux-types/product.types";
import { useGetAllProductsQuery } from "@/services/api/product"
import { useContext, useEffect, useState } from "react";
import { DisplayCategories } from "../category";
import { DisplayStockStatus } from "../stock";
import { ModalContext } from "@/context/modal";
import { IModal } from "@/context/modal/types";
import { useDispatch } from "react-redux";
import { storeCurrentRow } from "@/services/redux/reducers/row";
import { ProductDetail } from "../product-detail";
import { DeleteProduct } from "../delete-product";


export const ProductTable = () => {
    const {data, isLoading} = useGetAllProductsQuery(undefined);
    const {setModalContent, setModalState} = useContext(ModalContext) as IModal;
    const [tableData, setTableData] = useState<IProduct[]>([])
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(data && data.success== true){
            setTableData(data.data as IProduct[]);
        }

    },[data])

    const hanldeRowClick = (productItem:any)=>{
        setModalState(true);
        setModalContent(<ProductDetail />)
        dispatch(storeCurrentRow(productItem))
    }

    let headers = ["Product Name", "Quantiy In Stock", "Unit Price(GHS)","Expected Revenue","Category", "Weight(kg)", "Height(kg)", "Stock Status",  "Actions"]
    let content = (
        tableData.map((productItem, index)=><tr onClick={()=>hanldeRowClick(productItem)} key={index} className="border-b hover:bg-gray-50 hover:cursor-pointer">
            <td className="py-3 px-2">{productItem.product_name}</td>
            <td className="py-3 px-2">{productItem.quantity_in_stock}</td>
            <td className="py-3 px-2">{productItem.unit_price}</td>
            <td className="py-3 px-2">{productItem.expected_revenue}</td>
            {/* <td className="py-3 px-2">{productItem.current_revenue }</td> */}
            <td className="py-3 px-2"><DisplayCategories categories={productItem.category as string[]}/></td>
            <td className="py-3 px-2">{productItem.weight}</td>
            <td className="py-3 px-2">{productItem.height}</td>
            <td className="py-3 px-2"><DisplayStockStatus stock_status={productItem.stock_status as string}/></td>
            {/* <td className="py-3 px-2">{productItem.quantity_sold}</td>
            <td className="py-3 px-2 ">{productItem.total_orders}</td> */}
            <td className="py-3 px-2"><EditDelete deleteModalContent={<DeleteProduct productItem={productItem}/>}  /></td>
        </tr>)
    )


    return (
        <>
            <Table headers={headers} content={content} isLoading={isLoading} />
        </>
    )
}