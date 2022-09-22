import prisma from "../../database"
import { AppError } from "../../errors/appError"

const contactCaptureService = async (id: string, userId: string) => {

    const contact = await prisma.contact.findUnique({
        where: {
            id: id
        }
    })

    if (!contact) {
        throw new AppError(404, "Contact not found")
    }

    if (contact.userId != userId) {
        throw new AppError(403, "this contact does not belong to you")
    }

    return contact
}

export default contactCaptureService