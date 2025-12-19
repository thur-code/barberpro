import type { Request, Response } from "express";
import { ListScheduleService } from "../../service/schedule/ListScheduleService";

export class ListScheduleController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;

    const listSchedule = new ListScheduleService();

    const schedule = await listSchedule.execute({ user_id });

    return res.json(schedule);
  }
}
