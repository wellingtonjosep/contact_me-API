import { Request, Response } from "express";
import { handleError } from "../../errors/appError";
import userDeleteService from "../../services/user/userDelete.service";


const userDeleteController = async (req: Request, res: Response) => {
    try {
        const {id} = req.params

        const response = await userDeleteService(id)

        return res.status(204).json()
    } catch(err) {
        if (err instanceof Error) {
            handleError(err,res)
        }
    }
}

export default userDeleteController