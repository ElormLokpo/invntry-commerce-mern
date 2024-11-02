import { IProps } from "./types"

export const Input = ({ label, type, style_type, placeholder, name, onChangeHandler, isError }: IProps) => {
    let generic_style = "border w-full rounded text-xs"
    let auth_style = `${generic_style} py-3 px-1`
    let def_style = `${generic_style} py-1 px-1`
    let error_style_auth = `${generic_style} border-red-400 py-1.5 px-1`
    let error_style_def = `${generic_style} border-red-400 py-1 px-1`
    let input_style = style_type == "auth_style" ? auth_style : def_style

    if (isError == true && style_type == "auth_style") {
        input_style = error_style_auth
    }

    if (isError == true && style_type !== "auth_style") {
        input_style = error_style_def
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandler({ key: e.target.name, value: e.target.value })
    }

    return (
        <div>
            <label className="text-[0.68rem] text-gray-600 mb-1">{label}</label>
            <input type={type ? type : "text"} name={name} placeholder={placeholder} className={input_style} onChange={handleInputChange} />
        </div>
    )
}

export const TextArea = ({ label, placeholder, name, onChangeHandler }: IProps) => {
    let def_style = "border w-full rounded text-xs py-1 px-1"

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChangeHandler({ key: e.target.name, value: e.target.value })
    }

    return (
        <div>
            <label className="text-[0.68rem] mb-1">{label}:</label>
            <textarea name={name} onChange={handleInputChange} className={def_style} rows={4} placeholder={placeholder} />
        </div>
    )
}


