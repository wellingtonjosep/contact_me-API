import { NextFunction, Request, Response } from "express";
import prisma from "../../database";
import { AppError } from "../../errors/appError";

const verifyIdContactMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const { contact_id } = req.params

    const id = req.id

    const contact = await prisma.contact.findUnique({
        where: {
            id: contact_id
        }
    })

    if (!contact) {
        return res.status(404).json({
            status: "error",
            statusCode: 404,
            message: "Contact not found",
        })
    }

    if (contact.userId != id) {
        return res.status(404).json({
            status: "error",
            statusCode: 403,
            message: "you can only change your contacts",
        })
    }

    next()
}

export default verifyIdContactMiddleware