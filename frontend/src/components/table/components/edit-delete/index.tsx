import { PiTrashSimpleLight } from "react-icons/pi";
import { LiaEditSolid } from "react-icons/lia";
import { ReactElement, useContext } from "react";
import { ModalContext } from "@/context/modal";
import { IModal } from "@/context/modal/types";
import { IProps } from "./types";

export const EditDelete = ({deleteModalContent}:IProps)=>{
    const {setModalState, setModalContent} = useContext(ModalContext) as IModal;
    const handleDelete = ()=>{
        setModalState(true)
        setModalContent(deleteModalContent as ReactElement)
    }

    const handleContainerClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
    }

    return(
        <div className="flex gap-4" onClick={handleContainerClick}>
            <button className="flex gap-1 items-center underline"><LiaEditSolid /> Edit</button>
            <button onClick={handleDelete} className="flex gap-1 items-center underline"><PiTrashSimpleLight /> Delete</button>
        </div>
    )
}