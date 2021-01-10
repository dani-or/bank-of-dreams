import express from "express";
import { HealthCheckRouter } from "./routes/health.route";
import { ProductRouter } from "./routes/product.route";
import { AuthRouter } from "./routes/auth.route";


const app = express();

app.use(express.json());
app.use(HealthCheckRouter);
app.use(ProductRouter);
app.use(AuthRouter);

export { app };
