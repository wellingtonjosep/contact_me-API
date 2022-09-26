import express, { NextFunction, Request, Response } from "express";
import { AppError } from "./errors/appError";
import router from "./routes/routes";
import cors from "cors"

const app = express();

app.use(cors())

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode!).json({
      status: "error",
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(process.env.PORT || 4000);
console.log("Online")

export default app;
