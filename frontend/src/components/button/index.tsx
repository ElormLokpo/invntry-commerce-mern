import { IProps } from "./types"


export const Button = ({ content, icon, loading_text, style_type, is_loading }: IProps) => {
    let button_content = is_loading ? loading_text :  (<>{icon} {content}</>);
    let defualt_btn_style = "bg-gray-800 w-full rounded py-2.5 font-semibold hover:bg-gray-600 text-white text-sm"

    return <button className={defualt_btn_style}>{button_content}</button>
}