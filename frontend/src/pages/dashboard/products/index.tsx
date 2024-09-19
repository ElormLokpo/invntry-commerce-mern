import { Button } from "@/components/button";
import { FiSearch } from "react-icons/fi";
import { IoFilterSharp } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { ProductTable } from "./components/table";
import {useNavigate} from "react-router-dom";

const SearchComponent = ()=>{
    return(
        <div className="text-xs flex w-[24rem] gap-2 px-2  items-center border rounded bg-gray-50">
            <FiSearch />
            <input placeholder="Find Product" className="py-1.5 bg-gray-50 w-full focus:outline-0"/>
        </div>
    )
} 




export const ProductPage = () => {
    let navigate = useNavigate();

    const handleAddProduct = ()=>{
        navigate("/admin/dashboard/products/add")
    }

    return (
        <div className="p-10 hull">

            <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-lg">Products</p>

                <div className="flex gap-2 items-center">
                    <SearchComponent />

                    <Button content="Filter" icon={<IoFilterSharp />} style_type="misc"/>
                    <Button handler={handleAddProduct} content="Add Product" style_type="def" icon={<IoMdAdd />}/>
                </div>
            </div>

            <div>
                <ProductTable />
            </div>
        </div>
    )
}