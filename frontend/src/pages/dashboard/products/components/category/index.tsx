import { Button } from "@/components/button"
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IDisplayCategoriesProps } from "./types";


const CategoryItem = ({ item }: { item: string }) => {
    return (
        <div className="text-[0.65rem] w-full rounded-full bg-gray-200 py-1 gap-4 px-2 flex justify-between">
            <p>{item}</p>

            <button>
                <IoMdCloseCircleOutline />
            </button>
        </div>
    )
}
export const AddCategories = () => {
    let input_style = "border w-full rounded text-sm py-1 px-1"

    return (
        <div>
            <div className="mb-2 grid grid-cols-8 gap-2 items-end">
                <div className="col-span-6">
                    <label className="text-[0.68rem] text-gray-600 mb-1">Category:</label>
                    <input className={input_style} />

                </div>
                <div className="col-span-2 flex gap-1">
                    <Button content="Add" style_type="def-dark" />
                    <Button content="Done" style_type="def-dark-outline" />
                </div>
            </div>

            <div className="flex gap-2 overflow-x-scroll py-2">
                {
                    ["Furniture", "Clothing", "Utensils", "Office", "Kids", "Electronics"].map((item, index) => <CategoryItem key={index} item={item} />)
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