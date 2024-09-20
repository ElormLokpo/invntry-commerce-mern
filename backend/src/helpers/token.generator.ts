import jwt from "jsonwebtoken"

export const GenerateToken = (payload:any)=>{
    return jwt.sign(payload, process.env.TOKEN_SECRET, {expiresIn: 60 * 60})
} 