export const GenerateResponse = <T,>(success:boolean, message:string, data:T, total_number_pages?:number)=>{
    return {
        success,
        message, 
        data,
        total_number_pages
    }
}