import { Router } from "express";
import { createUser } from "./user.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { createUserZodSchema } from "./user.zodSchema";
const router = Router()

router.post("/register", validateRequest(createUserZodSchema), createUser)


export const UserRoutes = router;