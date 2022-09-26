import prisma from "../../database"
import { AppError } from "../../errors/appError"
import { IContactUpdate } from "../../interfaces/contact"


const contactUpdateService = async ({name, phone, email, id}: IContactUpdate) => {
    
    if (typeof name != "string") {
        throw new AppError(403,"Error type name")
    }

    if (typeof email != "string") {
        throw new AppError(403,"Error type email")
    }

    if (typeof phone != "string") {
        throw new AppError(403,"Error type phone")
    }

    const oldContact = await prisma.contact.findUnique({
        where: {
            id: id
        }
    })

    if (!oldContact) {
        throw new AppError(404,"Contact not found")
    }

    const contact = await prisma.contact.update({
        where: {
            id: id
        },
        data: {
            name: name || oldContact.name,
            email: email || oldContact.email,
            phone: phone || oldContact.phone
        }
    })

    return contact
}

export default contactUpdateService