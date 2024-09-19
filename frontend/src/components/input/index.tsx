import { IProps } from "./types"

export const Input = ({ label, type, style_type, placeholder }: IProps) => {
    let auth_style = "border bg-gray-50 w-full rounded text-sm py-1.5 px-1"
    let def_style = "border w-full rounded text-sm py-1 px-1"
    let input_style = style_type == "auth_style" ? auth_style : def_style

    return (
        <div>
            <label className="text-[0.68rem] text-gray-600 mb-1">{label}:</label>
            <input type={type ? type : "text"} placeholder={placeholder} className={input_style} />
        </div>
    )
}

export const TextArea = ({ label, placeholder }: IProps) => {  
    let def_style = "border w-full rounded text-sm py-1 px-1"
   
    return (
        <div>
            <label className="text-[0.68rem] mb-1">{label}:</label>
            <textarea className={def_style} rows={4} placeholder={placeholder} />
        </div>
    )
}