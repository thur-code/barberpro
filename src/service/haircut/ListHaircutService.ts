import { prisma } from "../../lib/prisma";

interface HaircutRequest {
  user_id: string;
  status: boolean | string;
}

export class ListHaircutService {
  async execute({ user_id, status }: HaircutRequest) {
    const haircut = await prisma.haircut.findMany({
      where: { user_id, status: status === "true" ? true : false },
    });

    return haircut;
  }
}
