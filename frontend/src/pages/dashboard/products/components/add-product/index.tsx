import { Link, useNavigate } from "react-router-dom"
import { BiLeftArrowCircle } from "react-icons/bi";
import { Input, TextArea } from "@/components/input";
import { Button } from "@/components/button";
import { AddCategories } from "../category";
import { useState } from "react";
import { IProductRequestDTO } from "@/services/api-redux-types/product.types";
import { useAddProductMutation } from "@/services/api/product";
import { toast } from "sonner";


export const AddProdcut = () => {
    const [productData, setProductData] = useState<IProductRequestDTO>()
    const [addProdctMutation, {isLoading}] = useAddProductMutation()
    const navigate = useNavigate();


    const handleInputChange = ({ key, value }: any) => {
        if (value) {
            setProductData((prev:any)=>{
                return {...prev, [key]:value}
            })
        }
    }

    const handleSubmit = async ()=>{
        const data =  await addProdctMutation(productData as IProductRequestDTO) 
        if(data.data?.success==true){
            navigate("/admin/dashboard/products")
        }else{
            toast.error(data.data?.message)
        }
    
    }

    const handleDoneCategories = (categoriesArr: string[])=>{
        setProductData((prev:any)=>{
            return {...prev, category: categoriesArr}
        })
    }


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
                            <Input label="Product Name" name="product_name" onChangeHandler={handleInputChange} />
                        </div>
                        <div>
                            <TextArea label="Product Description" name="description" onChangeHandler={handleInputChange} placeholder="" />
                            <p className="text-[0.7rem] text-gray-600">Note: This text will be displayed on the product detail page for customers to see.</p>

                        </div>
                    </div>

                    <p className="font-semibold text-xs text-gray-600 mb-2">Pricing</p>
                    <div className="border rounded p-2 mb-5 shadow-lg">
                        <div className="mb-2 grid grid-cols-2 gap-2">
                            <Input label="Currency" placeholder="eg.USD" name="currrency" onChangeHandler={handleInputChange} />

                            <Input label="Unit Price" type="number" name="unit_price" onChangeHandler={handleInputChange} />
                        </div>

                        <div className="mb-2">
                            <Input label="Quantity in Stock" name="quantity_in_stock" type="number" onChangeHandler={handleInputChange} />
                        </div>


                    </div>

                    <p className="font-semibold text-xs text-gray-600 mb-2">Categories</p>
                    <div className="border rounded p-2 mb-5 shadow-lg">
                        <AddCategories doneHanlder={handleDoneCategories}/>
                    </div>
                </div>

                <div>

                    <p className="font-semibold text-xs text-gray-600 mb-2">Dimensions</p>
                    <div className="border rounded p-2 mb-5 shadow-lg">
                        <div className="mb-2 grid grid-cols-2 gap-2">
                            <Input label="Weight (kg)" type="number" name="weight" onChangeHandler={handleInputChange} />
                            <Input label="Height (cm)" type="number" name="height" onChangeHandler={handleInputChange} />

                        </div>
                    </div>

                    <div className="flex justify-end">
                        <div>
                            <Button content="Add Product" handler={handleSubmit} is_loading={isLoading} loading_text="Adding Product..."/>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}