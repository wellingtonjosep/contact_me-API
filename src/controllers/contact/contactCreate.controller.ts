import { Request, Response } from "express";
import { handleError } from "../../errors/appError";
import contactCreateService from "../../services/contact/contactCreate.service";


const contactCreateController = async (req: Request, res: Response) => {
    try {
        const id = req.id

        const {name, email, phone} = req.body

        const response = await contactCreateService({id: id, name: name, email: email, phone: phone})
        
        return res.status(201).json(response)
    } catch(err) {
        if (err instanceof Error) {
            handleError(err,res)
        }
    }
}

export default contactCreateController