import { IProps } from "./types"

export const Input = ({label,type}:IProps)=>{
    return( 
        <div>
            <label className="text-xs mb-1">{label}:</label>
            <input type={type? type : "text"} className="border bg-gray-50 w-full rounded text-sm py-1.5 px-1"/>
        </div>
    )
}