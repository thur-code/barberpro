import { Router } from "express";
import { CreateUserController } from "./controller/users/CreateUserController";
import { AuthUserController } from "./controller/users/AuthUserController";
import { DetailUserController } from "./controller/users/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { UpdateUserController } from "./controller/users/UpdateUserController";

import { CreateHaircutController } from "./controller/haircut/CreateHaircutController";
import { ListHaircutController } from "./controller/haircut/ListHaircutController";
import { UpdateHaircutController } from "./controller/haircut/UpdateHaircutController";
import { CheckSubscriptionController } from "./controller/haircut/CheckSubscriptionController";
import { CountHaircutsController } from "./controller/haircut/CountHaircutsController";
import { DetailHaircutController } from "./controller/haircut/DetailHaircutController";
import { NewScheduleController } from "./controller/schedule/NewScheduleController";
import { ListScheduleController } from "./controller/schedule/ListScheduleController";
import { FinishScheduleController } from "./controller/schedule/FinishScheduleController";

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
router.get(
  "/haircut/check",
  isAuthenticated,
  new CheckSubscriptionController().handle
);
router.get(
  "/haircut/count",
  isAuthenticated,
  new CountHaircutsController().handle
);
router.get(
  "/haircut/detail",
  isAuthenticated,
  new DetailHaircutController().handle
);

// ROTAS SCHEDULE
router.post("/schedule", isAuthenticated, new NewScheduleController().handle);
router.get("/schedule", isAuthenticated, new ListScheduleController().handle);
router.delete(
  "/schedule",
  isAuthenticated,
  new FinishScheduleController().handle
);
