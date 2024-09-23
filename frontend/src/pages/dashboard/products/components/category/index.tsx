import { useState } from "react";
import { Button } from "@/components/button"
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IAddCategoriesProps, IDisplayCategoriesProps } from "./types";
import { ProductCategoryEnum } from "@/services/api-redux-types/product.types";
import { toast } from "sonner";




export const AddCategories = ({doneHanlder}:IAddCategoriesProps) => {
    const [categoriesSet, setCategoriesSet] = useState<Set<string>>(new Set());
    const [currentCategory, setCurrentCategory] = useState<string>(Object.values(ProductCategoryEnum)[0]);

    const handleSetCurrentCategory = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        setCurrentCategory(e.target.value)
    }

    const handleAddCategory = ()=>{
        setCategoriesSet((prev:Set<string>)=> new Set(prev).add(currentCategory as string))
    }

    const hanldeDone = ()=>{
        toast.success("Categories Added")
        doneHanlder(Array.from(categoriesSet))
    }

    const handleDeleteCategory = (item: string)=>{
        setCategoriesSet((prev:Set<string>)=> {
            let tempSet = new Set(prev);
            tempSet.delete(item)
            return tempSet
        })


    }

    return (
        <div>
            <div className="mb-2 grid grid-cols-8 gap-2 items-end">
                <div className="col-span-6">
                  <select className="border w-full rounded text-xs py-1 px-1" onChange={handleSetCurrentCategory}>
                        {
                            Object.values(ProductCategoryEnum).map((item, index)=><option key={index} value={item}>{item}</option>)
                        }

                  </select>
                </div>
                <div className="col-span-2 flex gap-1">
                    <Button content="Add" style_type="def-dark" handler={handleAddCategory} />
                    <Button content="Done" style_type="def-dark-outline" handler={hanldeDone} />
                </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
                {
                    Array.from(categoriesSet).map((item, index) => <p className="underline text-[0.6rem] text-gray-600 px-2 py-1 flex justify-between border rounded-full " key={index}> {item} <button onClick={()=>handleDeleteCategory(item)}><IoMdCloseCircleOutline /></button> </p>)
                }
            </div>
        </div>
    )
}

export const DisplayCategories = ({categories}:IDisplayCategoriesProps) => {
    return (
        <div className="flex gap-2 ">
            {
                categories.map((item, index) => <p className="underline" key={index}>{item}</p>)
            }
        </div>
    )
}