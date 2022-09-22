import prisma from "../../database"
import { AppError } from "../../errors/appError"
import { IContactUpdate } from "../../interfaces/contact"


const contactUpdateService = async ({name, phone, email, id}: IContactUpdate) => {

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