import { Request, Response } from "express";
import { handleError } from "../../errors/appError";
import userUpdateService from "../../services/user/userUpdate.service";

const userUpdateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { name, email, password, phone } = req.body

    const response = await userUpdateService({id: id, name: name, email: email, password: password, phone: phone})

    return res.status(200).json(response)
  } catch (err) {
    if (err instanceof Error) {
      handleError(err, res);
    }
  }
};

export default userUpdateController;
