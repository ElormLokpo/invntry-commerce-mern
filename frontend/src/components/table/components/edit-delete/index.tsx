import { PiTrashSimpleLight } from "react-icons/pi";
import { LiaEditSolid } from "react-icons/lia";
import { useContext } from "react";
import { ModalContext } from "@/context/modal";
import { IModal } from "@/context/modal/types";

export const EditDelete = ()=>{
    const {setModalState, setModalContent} = useContext(ModalContext) as IModal;
    const handleDelete = ()=>{
        setModalState(true)
    }

    return(
        <div className="flex gap-4">
            <button className="flex gap-1 items-center underline"><LiaEditSolid /> Edit</button>
            <button onClick={handleDelete} className="flex gap-1 items-center underline"><PiTrashSimpleLight /> Delete</button>
        </div>
    )
}