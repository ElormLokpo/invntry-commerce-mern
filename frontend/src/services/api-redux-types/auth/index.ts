export interface IAuthRequest{
    username:string, 
    password:string
}

export interface IAuthResponse {
    token: string, 
    usernanme:string, 
    id: string
}

export interface IAuthReduxState{
    value:{
        current_user: IAuthResponse
    }
}

export interface IAuthUserResponse{
    message:string,
    success:boolean
}