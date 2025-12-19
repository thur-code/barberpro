import type { Request, Response } from "express";
import { DetailHaircutService } from "../../service/haircut/DetailHaircutService";

export class DetailHaircutController {
  async handle(req: Request, res: Response) {
    const haircut_id = req.query.haircut_id as string;

    const detailHaircut = new DetailHaircutService();

    const haircut = await detailHaircut.execute({ haircut_id });

    return res.json(haircut);
  }
}
