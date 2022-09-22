import express, { NextFunction, Request, Response } from "express";
import { AppError } from "./errors/appError";

import router from "./routes/routes";

const app = express();

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

app.listen(4000);
console.log("Servidor online")

export default app;
