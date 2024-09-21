import { PingController } from "./entities/ping/ping.controller";
import { App } from "./app";
import "dotenv/config"
import { AuthController } from "./entities/auth/auth.controller";
import { ProductController } from "./entities/products/product.controller";


const app = new App([
    new PingController(),
    new AuthController(),
    new ProductController()
]);

app.Listen();