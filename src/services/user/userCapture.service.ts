import prisma from "../../database"
import { AppError } from "../../errors/appError"


const userCaptureService = async (id: string, idToken: string) => {

    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })

    if (!user) {
        throw new AppError(404, "User not found")
    }

    if (user.id != idToken) {
        throw new AppError(403, "you do not have permission")
    }

    return {...user, password: undefined}
}

export default userCaptureService