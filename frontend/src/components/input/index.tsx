import { IProps } from "./types"

export const Input = ({ label, type, style_type, placeholder, name, onChangeHandler, isError, register, errors }: IProps) => {
    let generic_style = "border w-full rounded text-xs dark:bg-stone-800 dark:border-stone-600 "
    let auth_style = `${generic_style} py-3 px-1`
    let def_style = `${generic_style} py-1 px-1`
    let error_style_auth = `${generic_style} border-red-400 dark:border-red-400 py-3 px-1`
    let error_style_def = `${generic_style} border-red-400 dark:border-red-400 py-1 px-1`
    let input_style = style_type == "auth_style" ? auth_style : def_style

    if ((isError == true || errors[`${name}`]) && style_type == "auth_style") {
        input_style = error_style_auth
    }

    if ((isError == true || errors[`${name}`]) && style_type !== "auth_style") {
        input_style = error_style_def
    }

   

    return (
        <div>
            <label className="text-[0.68rem] text-gray-600 mb-1">{label}</label>
            <input type={type ? type : "text"} {...register(`${name}`)} placeholder={placeholder} className={input_style} onChange={onChangeHandler} />
            {errors[`${name}`] && <p className="text-left py-1 text-[0.6rem] text-red-500">{errors[`${name}`]?.message as string}</p>}
        </div>
    )
}

export const TextArea = ({ label, placeholder, name, onChangeHandler }: IProps) => {
    let def_style = "border w-full rounded text-xs py-1 px-1"


    return (
        <div>
            <label className="text-[0.68rem] mb-1">{label}:</label>
            <textarea name={name} onChange={onChangeHandler} className={def_style} rows={4} placeholder={placeholder} />
        </div>
    )
}


