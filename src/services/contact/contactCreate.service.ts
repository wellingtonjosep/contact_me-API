import prisma from "../../database"
import { AppError } from "../../errors/appError"
import { IContact } from "../../interfaces/contact"


const contactCreateService = async ({id,name, email, phone}: IContact) => {
    
    if (typeof name != "string" || !name) {
        throw new AppError(403,"Error type name")
    }

    if (typeof email != "string" || !email) {
        throw new AppError(403,"Error type email")
    }

    if (typeof phone != "string" || !phone) {
        throw new AppError(403,"Error type phone")
    }

    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })

    if (!user) {
        throw new AppError(404, "User not found")
    }

    const contact = await prisma.contact.create({
        data: {
            name,
            email,
            phone,
            userId: user.id
        }
    })

    return contact
}

export default contactCreateService