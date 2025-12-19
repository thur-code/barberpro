import { prisma } from "../../lib/prisma";

interface FinishRequest {
  schedule_id: string;
  user_id: string;
}

export class FinishScheduleService {
  async execute({ schedule_id, user_id }: FinishRequest) {
    if (schedule_id === "" || user_id === "") {
      throw new Error("Error.");
    }

    try {
      const belongsToUser = await prisma.service.findFirst({
        where: { id: schedule_id, user_id: user_id },
      });

      if (!belongsToUser) {
        throw new Error("Not authorized");
      }

      await prisma.service.delete({ where: { id: schedule_id } });

      return { message: "Finalizado com sucesso" };
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao deletar");
    }
  }
}
