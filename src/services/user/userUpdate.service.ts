import prisma from "../../database"
import { AppError } from "../../errors/appError"
import { IUserUpdate } from "../../interfaces/user"
import bcrypt from "bcryptjs"


const userUpdateService = async ({id, name, email, password, phone}: IUserUpdate) => {

    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })

    if (!user) {
        throw new AppError(404, "User not found")
    }

    const newUser = {
        name: name || user.name,
        email: email || user.email,
        phone: phone || user.phone,
        password: ""
    }
    
    password && (newUser.password = bcrypt.hashSync(password,10))

    const userUpdate = await prisma.user.update({
        where: {
            id: id
        },
        data: {
            name: newUser.name,
            email: newUser.email,
            password: newUser.password || user.password,
            phone: newUser.phone
        }
        
    })

    return {...userUpdate, password: undefined}
}

export default userUpdateService