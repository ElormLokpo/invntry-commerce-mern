import { Link } from "react-router-dom"
import { BiLeftArrowCircle } from "react-icons/bi";
import { Input, TextArea } from "@/components/input";
import { Button } from "@/components/button";
import { AddCategories } from "../add-category";


export const AddProdcut = () => {
    return (
        <div className="p-10 h-full">

            <div className="mb-3">
                <Link to="/admin/dashboard/products" className="text-xs underline mb-2 flex gap-1 items-end"><BiLeftArrowCircle /> Back</Link>
                <p className="font-semibold text-xl">Add Product</p>
            </div>

            <div className="w-[50rem] grid grid-cols-2 gap-5">
                <div>

                    <p className="font-semibold text-xs text-gray-600 mb-2 ">General</p>
                    <div className="border rounded shadow-lg p-2 mb-6">

                        <div className="mb-2">
                            <Input label="Product Name" />
                        </div>
                        <div>
                            <TextArea label="Product Description" placeholder="" />
                            <p className="text-[0.7rem] text-gray-600">Note: This text will be displayed on the product detail page for customers to see.</p>

                        </div>
                    </div>

                    <p className="font-semibold text-xs text-gray-600 mb-2">Pricing</p>
                    <div className="border rounded p-2 mb-5 shadow-lg">
                        <div className="mb-2 grid grid-cols-2 gap-2">
                            <Input label="Quantity in Stock" type="number" />
                            <Input label="Currency" />

                        </div>
                        <div className="mb-2">
                            <Input label="Unit Price" />
                        </div>
                        <div className="mb-2 grid grid-cols-2 gap-2">
                            <Input label="Discount Percentage" />
                            <Input label="Tax" />

                        </div>

                    </div>

                    <p className="font-semibold text-xs text-gray-600 mb-2">Categories</p>
                    <div className="border rounded p-2 mb-5 shadow-lg">
                        <AddCategories />
                    </div>
                </div>

                <div>
                   
                    <p className="font-semibold text-xs text-gray-600 mb-2">Dimensions</p>
                    <div className="border rounded p-2 mb-5 shadow-lg">
                        <div className="mb-2 grid grid-cols-2 gap-2">
                            <Input label="Weight" />
                            <Input label="Height" />

                        </div>
                    </div>

                    <div className="flex justify-end">
                        <div>
                            <Button  content="Add Product"/>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}