import { IStockProps } from "./types"


export const DisplayStockStatus = ({stock_status}:IStockProps)=>{
    let style = stock_status == "Out of Stock"? "text-amber-500" : "text-emerald-500"

    return <p className={style}>{stock_status}</p>
}