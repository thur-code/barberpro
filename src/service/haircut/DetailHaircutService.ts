import { prisma } from "../../lib/prisma";

interface DetailRequest {
  haircut_id: string;
}

export class DetailHaircutService {
  async execute({ haircut_id }: DetailRequest) {
    const haircut = await prisma.haircut.findFirst({
      where: { id: haircut_id },
    });

    return haircut;
  }
}
