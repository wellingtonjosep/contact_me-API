import { Response, Request } from "express";
import { AppError, handleError } from "../../errors/appError";
import userCreateService from "../../services/user/userCreate.service";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phone } = req.body;

    const response = await userCreateService({
      name: name,
      email: email,
      password: password,
      phone: phone,
    });

    return res.status(201).json(response);
  } catch (err) {
    if (err instanceof Error) {
      handleError(err, res);
    }
  }
};

export default userCreateController;
