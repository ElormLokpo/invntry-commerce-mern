export interface IProps {
    label?:string, 
    type?:string, 
    style_type?:string,
    placeholder?:string
    name: string,
    isError?:boolean,
    selectOptionsArr?: any[],
    onChangeHandler: (values:any)=>void
    
}