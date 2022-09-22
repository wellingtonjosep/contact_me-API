import prisma from "../../database";
import { AppError } from "../../errors/appError";
import { IUser } from "../../interfaces/user";
import bcrypt from "bcryptjs"

const userCreateService = async ({ name, email, password, phone }: IUser) => {
  const users = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (users) {
    throw new AppError(403, "Email already exists");
  }

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: await bcrypt.hash(password, 10),
      phone,
    },
  });

  return { ...user, password: undefined };
};

export default userCreateService;
