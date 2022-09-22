import { Request, Response } from "express";
import { handleError } from "../../errors/appError";
import contactDeleteService from "../../services/contact/contactDelete.service";


const contactDeleteController = async (req: Request, res: Response) => {
    try {
        const { contact_id } = req.params

        const response = await contactDeleteService(contact_id)

        return res.status(204).json()
    } catch(err) {
        if (err instanceof Error) {
            handleError(err, res)
        }
    }
}

export default contactDeleteController