import { useContext } from "react";
import { IProps } from "./types"
import { IoMdCloseCircleOutline } from "react-icons/io";
import { ModalContext } from "@/context/modal";
import { IModal } from "@/context/modal/types";


export const Button = ({ content, isSubmit, icon, loading_text, style_type, is_loading, handler }: IProps) => {
    let button_content = is_loading ? loading_text : (<>{icon} {content}</>);

    let auth_style = "bg-lime-400 w-full rounded-xl py-3 font-semibold hover:bg-lime-600 text-black text-sm hover:py-2.5 transition-all"
    let def_style = "flex gap-1  bg-teal-600 items-center justify-center rounded text-xs py-1.5 px-2 text-white hover:py-1 hover:bg-teal-600 transition-all font-semibold"
    let misc_style = "border flex gap-1 items-center rounded text-xs py-1.5 px-2 text-gray-500 border-gray-300 hover:py-1 hover:bg-gray-50 transition-all"
    let def_style_dark = "flex gap-1  bg-gray-900 items-center justify-center rounded text-xs py-1.5 px-2 text-white hover:py-1 hover:bg-gray-700 transition-all font-semibold"
    let def_style_dark_outline = "flex gap-1 border border-2  border-gray-900 items-center justify-center rounded text-xs py-1.5 px-2 text-gray-900 hover:py-1 hover:bg-gray-50 transition-all font-semibold"

    let defualt_btn_style;

    switch (style_type) {
        case "auth":
            defualt_btn_style = auth_style;
            break;
        case "misc":
            defualt_btn_style = misc_style;
            break;
        case "def":
            defualt_btn_style = def_style;
            break;
        case "def-dark":
            defualt_btn_style = def_style_dark;
            break;
        case "def-dark-outline":
            defualt_btn_style = def_style_dark_outline;
            break;
        default:
            defualt_btn_style = def_style

    }

    return <button type={isSubmit ? "submit" : "button"} onClick={handler} className={defualt_btn_style}>{button_content}</button>
}

export const CloseButton = () => {
    const { setModalState } = useContext(ModalContext) as IModal
    const handleClose = () => setModalState(false)
    return <button className="text-xs underline flex gap-1 items-end" onClick={handleClose}><IoMdCloseCircleOutline /> Close</button>
}