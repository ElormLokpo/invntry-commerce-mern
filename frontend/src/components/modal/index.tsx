import { ModalContext } from "@/context/modal";
import { IModal } from "@/context/modal/types"
import { ReactElement, useContext } from "react"


export const Modal = ({content}:{content?:ReactElement})=>{
    const {setModalState} = useContext(ModalContext) as IModal;
    
    const handleClick = ()=>{
        setModalState(false)
    }

    return(
        <div onClick={handleClick} className="modal-container flex items-center justify-center">
            {content}
        </div>
    )
}