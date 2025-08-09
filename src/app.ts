
import cors from "cors";
import express, { Request, Response } from "express";
import { globalErrorHandler } from './app/middlewares/globalErrorHandlers';
import routeNotFound from "./app/middlewares/routeNotFound";
import { router } from "./app/routes";
import cookieParser from "cookie-parser";


const app = express()


app.use(express.json());
app.use(cookieParser())
app.use(cors())

app.use("/api/v1", router)

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome to Backend Server"
    })
})

app.use(globalErrorHandler);
app.use(routeNotFound)

export default app;