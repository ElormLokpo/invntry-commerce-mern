import { Table } from "@/components/table"
import { EditDelete } from "@/components/table/components/edit-delete"


export const ProductTable = () => {
    let headers = ["Product Name", "Quantiy In Stock", "Unit Price(GHS)","Expected Revenue", "Current Revenue", "Category", "Weight(kg)", "Height(kg)", "Stock Status", "Quantity Sold", "Total Orders",  "Actions"]
    let content = (
        <tr className="border-b">
            <td className="py-3 px-2">Chairs, Room Sd4</td>
            <td className="py-3 px-2">450</td>
            <td className="py-3 px-2">67.5</td>
            <td className="py-3 px-2">2,345</td>
            <td className="py-3 px-2">2,345</td>
            <td className="py-3 px-2">Furniture</td>
            <td className="py-3 px-2">33.3</td>
            <td className="py-3 px-2">24.3</td>
            <td className="py-3 px-2">24.3</td>
            <td className="py-3 px-2">24.3</td>
            <td className="py-3 px-2 text-emerald-500">In stock</td>
            <td className="py-3 px-2"><EditDelete /></td>
        </tr>
    )


    return (
        <>
            <Table headers={headers} content={content} />
        </>
    )
}