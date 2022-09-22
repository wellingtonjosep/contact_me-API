import { Response, Request } from "express";
import prisma from "../../database";

const contactsListController = async (req: Request, res: Response) => {
    
    const contacts = await prisma.contact.findMany()
    
    return res.status(200).json(contacts)
} 

export default contactsListController