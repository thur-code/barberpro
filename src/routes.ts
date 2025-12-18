import { Router } from "express";
import { CreateUserController } from "./controller/users/CreateUserController";
import { AuthUserController } from "./controller/users/AuthUserController";
import { DetailUserController } from "./controller/users/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

export const router = Router();

// ROTAS USER
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);
