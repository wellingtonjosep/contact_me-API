import prisma from "../../database"

const contactDeleteService = async (id: string) => {

    await prisma.contact.delete({
        where: {
            id: id
        }
    })

    return true
}

export default contactDeleteService