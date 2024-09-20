import { Router } from "express";
import { IController } from "../../interfaces/controller.interface";
import {Request, Response, NextFunction} from "express";

export class PingController implements IController{
    public path = "/ping"
    public router = Router();

    constructor(){
        this.InitializeActions()
    }

    private InitializeActions(){
        this.router.get(`${this.path}/`, this.Ping)
    }

    private Ping(req:Request, res:Response, next:NextFunction){
        res.status(200).json({message:"Ping Successful"})
    }
}