import express from "express";
import { IController } from "./interfaces/controller.interface";
import mongoose from "mongoose";
import cors from "cors"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

export class App{
    private app: express.Express;

    constructor(controllers: IController[]){
        this.app = express();
        this.InitializeMiddleware();
        this.InitializeControllers(controllers)
        this.ConnectDB()

    }

    private InitializeControllers(controllers:IController[]){
        controllers.forEach(controller =>{
            this.app.use("/", controller.router)
        })
    }

    private InitializeMiddleware(){
        this.app.use(cors())
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
    }

    public Listen(){
        let port = process.env.PORT; 
        this.app.listen(port, ()=>console.log(`App running on port ${port}`))
    }

    private ConnectDB(){
        console.log("Database Connected")
        mongoose.Promise = Promise;
        mongoose.connect(process.env.MONGO_URL);
        mongoose.connection.on("error", (error:Error)=>console.log(error));
    }
}