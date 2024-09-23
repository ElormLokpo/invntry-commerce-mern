export interface IResponse<T>{
    success:boolean, 
    message: string, 
    data: T,
    total_number_pages?:number
}


export interface IResponseDTO{
    message:string,
    success:boolean
}