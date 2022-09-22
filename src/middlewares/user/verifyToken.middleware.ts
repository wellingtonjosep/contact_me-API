import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const verifyTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    jwt.verify(
      token as string,
      process.env.SECRET_KEY as string,
      (err, decoded: any) => {
        req.id = decoded.id;
        next();
      }
    );
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

export default verifyTokenMiddleware;
