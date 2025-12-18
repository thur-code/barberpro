import { hashPassword } from "../../lib/password";
import { prisma } from "../../lib/prisma";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

export class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await prisma.user.findFirst({ where: { email } });

    if (userAlreadyExists) {
      throw new Error("Email already exists");
    }

    const hashed = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashed,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}
