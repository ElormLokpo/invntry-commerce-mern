import { PingController } from "./entities/ping/ping.controller";
import { App } from "./app";
import "dotenv/config"
import { AuthController } from "./entities/auth/auth.controller";


const app = new App([
    new PingController(),
    new AuthController()
]);

app.Listen();