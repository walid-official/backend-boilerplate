
import { Router } from "express";
import { changePassword, credentialsLogin, getNewAccessToken, logout, resetPassword } from "./auth.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";

const router = Router()

router.post("/login", credentialsLogin)
router.post("/logout", logout)
router.post("/refresh-token",  getNewAccessToken)
router.post("/change-password", checkAuth(...Object.values(Role)), changePassword);
router.post("/reset-password", checkAuth(...Object.values(Role)), resetPassword)

export const AuthRoutes = router;