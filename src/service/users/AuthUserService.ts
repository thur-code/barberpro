import { verifyPassword } from "../../lib/password";
import { prisma } from "../../lib/prisma";
import { SignJWT } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

interface AuthUserRequest {
  email: string;
  password: string;
}

export class AuthUserService {
  async execute({ email, password }: AuthUserRequest) {
    const user = await prisma.user.findFirst({
      where: { email },
      include: { subscriptions: true },
    });

    if (!user) {
      throw new Error("Email/password incorrect");
    }

    const ok = await verifyPassword(user?.password, password);

    if (!ok) {
      throw new Error("Email/password incorrect");
    }

    const token = await new SignJWT({
      name: user.name,
      email: user.email,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setSubject(user.id)
      .setIssuedAt()
      .setExpirationTime("30d")
      .sign(secret);

    return {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      token: token,
      subscriptions: user.subscriptions
        ? { id: user?.subscriptions?.id, status: user?.subscriptions?.status }
        : null,
    };
  }
}
