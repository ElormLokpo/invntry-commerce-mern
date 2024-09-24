import { Table } from "@/components/table"
import { EditDelete } from "@/components/table/components/edit-delete"
import {IOrder} from "@/services/api-redux-types/order.types"
import { useGetAllOrdersQuery } from "@/services/api/order";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "@/context/modal";
import { IModal } from "@/context/modal/types";
import { useDispatch } from "react-redux";
import { storeCurrentRow } from "@/services/redux/reducers/row";
import { OrderDetail } from "../order-detail";
import { DeleteOrder } from "../delete-order";


export const OrderTable = () => {
    const {data, isLoading} = useGetAllOrdersQuery(undefined);
    const {setModalContent, setModalState} = useContext(ModalContext) as IModal;
    const [tableData, setTableData] = useState<IOrder[]>([])
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(data && data.success== true){
            setTableData(data.data as IOrder[]);
        }

    },[data])

    const hanldeRowClick = (orderItem:any)=>{
        setModalState(true);
        setModalContent(<OrderDetail />)
        dispatch(storeCurrentRow(orderItem))
    }

    let headers = ["Order Number","Total Cost","Order Status","Delivery Status", "Payment Status","No of Products", "Date Ordered", "Expected Delivery Date",  "Actions"]
    let content = (
        tableData.map((orderItem, index)=><tr onClick={()=>hanldeRowClick(orderItem)} key={index} className="border-b hover:bg-gray-50 hover:cursor-pointer">
            <td className="py-3 px-2">{orderItem.order_number}</td>
            <td className="py-3 px-2">{orderItem.total_cost}</td>
            <td className="py-3 px-2">{orderItem.order_status}</td>
            <td className="py-3 px-2">{orderItem.delivery_status}</td>
            <td className="py-3 px-2">{orderItem.payment_status}</td>
            <td className="py-3 px-2">{orderItem.products?.length}</td>
            <td className="py-3 px-2">24th July, 2024</td>
            <td className="py-3 px-2">12th August, 2024</td>
            <td className="py-3 px-2"><EditDelete deleteModalContent={<DeleteOrder orderItem={orderItem}/>}  /></td>
        </tr>)
    )


    return (
        <>
            <Table headers={headers} content={content} isLoading={isLoading} />
        </>
    )
}