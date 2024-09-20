export interface IProps {
    label?:string, 
    type?:string, 
    style_type?:string,
    placeholder?:string
    name: string,
    isError?:boolean
    onChangeHandler: (values:any)=>void
    
}