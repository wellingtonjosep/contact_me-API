import prisma from "../../database";

const userContactsService = async (id: string) => {
    const contacts = await prisma.contact.findMany({
        where: {
            userId: id
        }
    })

    return contacts
};

export default userContactsService;
