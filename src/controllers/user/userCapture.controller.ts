import { Request, Response } from "express"
import { handleError } from "../../errors/appError"
import userCaptureService from "../../services/user/userCapture.service"


const userCaptureController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const idToken = req.id

        const response = await userCaptureService(id, idToken)

        return res.status(200).json(response)
    } catch(err) {
        if (err instanceof Error) {
            handleError(err,res)
        }
    }
}

export default userCaptureController