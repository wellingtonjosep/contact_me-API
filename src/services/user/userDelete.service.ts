import prisma from "../../database"
import { AppError } from "../../errors/appError"


const userDeleteService = async (id: string) => {

    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })

    if (!user) {
        throw new AppError(404,"User not found")
    }

    await prisma.user.delete({
        where: {
            id: id
        }
    })

    return true
}

export default userDeleteService