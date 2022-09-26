import prisma from "../../database";
import { AppError } from "../../errors/appError";
import { IUserLogin } from "../../interfaces/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userLoginService = async ({ email, password }: IUserLogin) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) {
    throw new AppError(401, "Wrong email/password");
  }
  if (!bcrypt.compareSync(password, user.password)) {
    throw new AppError(401, "Wrong email/password");
  }

  const token = jwt.sign({ id: user.id }, String(process.env.JWT_SECRET), {
    expiresIn: "1d",
  });

  return {token:token, userId: user.id};
};

export default userLoginService;
