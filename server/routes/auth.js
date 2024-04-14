import { Router } from "express";
import { authenticateUser } from "../middlewares";
import {
	getProfile,
	guestLogin,
	login,
	logout,
	register,
	updateProfile,
} from "../controllers";

const router = Router();

router.route("/register").post(register);
router.route("/login").get(guestLogin).post(login);
router.route("/logout").get(authenticateUser, logout);
router
	.route("/me")
	.get(authenticateUser, getProfile)
	.patch(authenticateUser, updateProfile);

export default router;
