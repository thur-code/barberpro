import { prisma } from "../../lib/prisma";

interface HaircutRequest {
  user_id: string;
  name: string;
  price: number;
}

export class CreateHaircutService {
  async execute({ user_id, name, price }: HaircutRequest) {
    if (!name || !price) {
      throw new Error("Error");
    }

    const myHaircuts = await prisma.haircut.count({ where: { user_id } });

    const user = await prisma.user.findFirst({
      where: { id: user_id },
      include: { subscriptions: true },
    });

    if (myHaircuts >= 3 && user?.subscriptions?.status !== "active") {
      throw new Error("Not authorized");
    }

    const haircut = await prisma.haircut.create({
      data: { name, price, user_id },
    });

    return haircut;
  }
}
