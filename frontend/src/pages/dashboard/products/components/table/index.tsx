import { Table } from "@/components/table"
import { EditDelete } from "@/components/table/components/edit-delete"
import { IProduct } from "@/services/api-redux-types/product.types";
import { useGetAllProductsQuery } from "@/services/api/product"
import { useEffect, useState } from "react";
import { DisplayCategories } from "../category";
import { DisplayStockStatus } from "../stock";


export const ProductTable = () => {
    const {data, isLoading} = useGetAllProductsQuery(undefined);
    const [tableData, setTableData] = useState<IProduct[]>([])
 
    useEffect(()=>{
        
        if(data && data.success== true){
            console.log(data.data)
            setTableData(data.data as IProduct[]);
        }

    },[data])

    let headers = ["Product Name", "Quantiy In Stock", "Unit Price(GHS)","Expected Revenue","Category", "Weight(kg)", "Height(kg)", "Stock Status",  "Actions"]
    let content = (
        tableData.map((productItem, index)=><tr key={index} className="border-b">
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
            <td className="py-3 px-2"><EditDelete /></td>
        </tr>)
    )


    return (
        <>
            <Table headers={headers} content={content} isLoading={isLoading} />
        </>
    )
}