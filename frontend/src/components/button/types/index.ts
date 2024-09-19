import { ReactElement } from "react";

export interface IProps {
    content?:string, 
    icon?:ReactElement,
    is_loading?:boolean,
    loading_text?:string,
    style_type?:string,
    handler?: ()=>void
}