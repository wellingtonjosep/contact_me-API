import { Request, Response } from "express"
import { handleError } from "../../errors/appError"
import userContactsService from "../../services/user/userContacts.service"


const userContactsController = async (req: Request, res: Response) => {
 try {
    const id = req.id

    const response = await userContactsService(id)

    return res.status(200).json(response)
 } catch(err) {
    if (err instanceof Error) {
        handleError(err,res)
    }
 }
} 

export default userContactsController