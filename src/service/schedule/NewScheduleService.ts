import { prisma } from "../../lib/prisma";

interface newScheduleRequest {
  user_id: string;
  haircut_id: string;
  customer: string;
}

export class NewScheduleService {
  async execute({ user_id, haircut_id, customer }: newScheduleRequest) {
    if (customer === "" || haircut_id === "") {
      throw new Error("Error schedule new service");
    }

    const schedule = await prisma.service.create({
      data: { customer, haircut_id, user_id },
    });

    return schedule;
  }
}
