import { Request, Response } from "express";
import { handleError } from "../../errors/appError";
import contactUpdateService from "../../services/contact/contactUpdate.service";


const contactUpdateController = async (req: Request, res: Response) => {
    try {
        const { email, phone, name } = req.body

        const { contact_id } = req.params

        const response = await contactUpdateService({name: name, email: email, phone: phone, id: contact_id})
    
        return res.status(200).json(response)
    } catch(err) {
        if (err instanceof Error) {
            handleError(err, res)
        }
    }
}

export default contactUpdateController