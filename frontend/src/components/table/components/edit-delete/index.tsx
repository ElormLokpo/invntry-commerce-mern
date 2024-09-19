import { PiTrashSimpleLight } from "react-icons/pi";
import { LiaEditSolid } from "react-icons/lia";

export const EditDelete = ()=>{
    return(
        <div className="flex gap-4">
            <button className="flex gap-1 items-center underline"><LiaEditSolid /> Edit</button>
            <button className="flex gap-1 items-center underline"><PiTrashSimpleLight /> Delete</button>
        </div>
    )
}