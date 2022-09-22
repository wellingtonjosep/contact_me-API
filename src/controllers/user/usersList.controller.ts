import { Response, Request } from "express";
import prisma from "../../database";

const usersListController = async (req: Request, res: Response) => {
    
    const users = await prisma.user.findMany()
    

    return res.status(200).json(users)
} 

export default usersListController