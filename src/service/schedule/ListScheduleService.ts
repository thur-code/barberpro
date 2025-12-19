import { prisma } from "../../lib/prisma";

interface ListScheduleRequest {
  user_id: string;
}

export class ListScheduleService {
  async execute({ user_id }: ListScheduleRequest) {
    const schedule = await prisma.service.findMany({
      where: { user_id },
      select: { id: true, customer: true, haircut: true },
    });

    return schedule;
  }
}
