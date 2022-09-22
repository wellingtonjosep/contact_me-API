import { Request, Response } from "express";
import { handleError } from "../../errors/appError";
import userLoginService from "../../services/user/userLogin.service";


const userLoginController = async (req: Request, res: Response) => {
    try {

        const {email, password} = req.body

        const response = await userLoginService({email: email, password: password})
        
        return res.status(200).json(response)
    } catch(err) {
        if (err instanceof Error) {
            handleError(err,res)
        }
    }
}

export default userLoginController