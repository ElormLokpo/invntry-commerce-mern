import { IProps } from "./types"


export const Button = ({ content, icon, loading_text, style_type, is_loading,handler }: IProps) => {
    let button_content = is_loading ? loading_text : (<>{icon} {content}</>);
    let auth_style = "bg-gray-800 w-full rounded py-2.5 font-semibold hover:bg-gray-600 text-white text-sm hover:py-1 transition-all"
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

    return <button onClick={handler} className={defualt_btn_style}>{button_content}</button>
}