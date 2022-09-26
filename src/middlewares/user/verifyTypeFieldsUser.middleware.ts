import { NextFunction, Request, Response } from "express";
import { IErrors, IUser } from "../../interfaces/user";

const verifyTypeFieldsUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, phone, password }: IUser = req.body;

  const errors: IErrors = {};

  if (typeof name != "string" || !name) {
    errors.name = "Required field";
  }

  if (typeof email != "string" || !email) {
    errors.email = "Required field";
  }

  if (typeof phone != "string" || !phone) {
    errors.phone = "Required field";
  }

  if (typeof password != "string" || !password) {
    errors.password = "Required field";
  }

  if (errors.name || errors.email || errors.password || errors.phone) {
    return res.status(400).json(errors);
  }

  next();
};

export default verifyTypeFieldsUserMiddleware;
