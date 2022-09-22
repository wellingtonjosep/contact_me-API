import prisma from "../../database"
import { AppError } from "../../errors/appError"
import { IContact } from "../../interfaces/contact"


const contactCreateService = async ({id,name, email, phone}: IContact) => {
    
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