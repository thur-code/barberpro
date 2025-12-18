import type { Request, Response } from "express";
import { AuthUserService } from "../../service/users/AuthUserService";

export class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const authUserService = new AuthUserService();

    const session = await authUserService.execute({ email, password });

    return res.json(session);
  }
}
