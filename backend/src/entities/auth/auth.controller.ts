import { NextFunction, Router, Request, Response } from "express";
import { IController } from "../../interfaces/controller.interface";
import { AuthModel } from "./auth.model";
import { GenerateResponse } from "../../helpers/response.generator";
import bcrypt from "bcrypt"
import { GenerateToken } from "../../helpers/token.generator";

export class AuthController implements IController {
    public path = "/auth"
    public router = Router();

    constructor() {
        this.InitializeActions()
    }

    private InitializeActions() {
        this.router.post(`${this.path}/register`, this.RegisterUser)
        this.router.post(`${this.path}/login`, this.LoginUser)
    }


    private async RegisterUser(req: Request, res: Response, next: NextFunction) {
        const { username, password } = req.body;
        if (!username || !password) {
            let response = GenerateResponse(false, "Password and Username fields required", {})
            res.status(200).json(response);
            next()
        }

        const user_exists = await AuthModel.findOne({ username });

        if (user_exists) {
            let response = GenerateResponse(false, "User already exists", {})
            res.status(200).json(response);
            next()
        }

        const user_mutation = await AuthModel.create({ username, password });

        let response = GenerateResponse(true, "User created successfully", { username: user_mutation.username })
        res.status(200).json(response);
        next()
    }

    private async LoginUser(req: Request, res: Response, next: NextFunction) {
        const { username, password } = req.body;
        if (!username || !password) {
            let response = GenerateResponse(false, "Password and Username fields required", {})
            res.status(200).json(response);
            next()
        }

        const user_exists = await AuthModel.findOne({ username }).select("+password");

        if (!user_exists) {
            let response = GenerateResponse(false, "User does not exist", {})
            res.status(200).json(response);
            next()
        }

        if(user_exists){
            const user_password_valid = await bcrypt.compare(password, user_exists.password);

            if (!user_password_valid) {
                let response = GenerateResponse(false, "Incorrect Password", { })
                res.status(200).json(response);
                next()
            }
    
            let token = GenerateToken({username: user_exists.username})
            let response = GenerateResponse(true, "User Login Sucessfull", { token, username: user_exists.username, id:user_exists._id })
            res.status(200).json(response);
            next()
        }

        let response = GenerateResponse(false, "Something went wrong", {})
        res.status(200).json(response);
        next()

       
    }
}