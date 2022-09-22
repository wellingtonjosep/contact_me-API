import { Request, Response } from "express";
import { handleError } from "../../errors/appError";
import contactCaptureService from "../../services/contact/contactCapture.service";


const contactCaptureController = async (req: Request, res: Response) => {
    try {
        const { contact_id } = req.params

        const id = req.id

        const response = await contactCaptureService(contact_id, id)

        return res.status(200).json(response)
    } catch(err) {
        if (err instanceof Error) {
            handleError(err,res)
        }
    }
}

export default contactCaptureController