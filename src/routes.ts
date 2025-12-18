import { Router } from "express";
import { CreateUserController } from "./controller/users/CreateUserController";
import { AuthUserController } from "./controller/users/AuthUserController";
import { DetailUserController } from "./controller/users/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { UpdateUserController } from "./controller/users/UpdateUserController";

import { CreateHaircutController } from "./controller/haircut/CreateHaircutController";
import { ListHaircutController } from "./controller/haircut/ListHaircutController";
import { UpdateHaircutController } from "./controller/haircut/UpdateHaircutController";

export const router = Router();

// ROTAS USER
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);
router.put("/users", isAuthenticated, new UpdateUserController().handle);

// ROTAS HAIRCUT
router.post("/haircut", isAuthenticated, new CreateHaircutController().handle);
router.get("/haircuts", isAuthenticated, new ListHaircutController().handle);
router.put("/haircut", isAuthenticated, new UpdateHaircutController().handle);
