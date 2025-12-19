import { prisma } from "../../lib/prisma";

interface CountRequest {
  user_id: string;
}

export class CountHaircutsService {
  async execute({ user_id }: CountRequest) {
    const count = await prisma.haircut.count({ where: { user_id } });

    return count;
  }
}
