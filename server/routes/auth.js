const { Router } = require("express");
const {
	register,
	login,
	guestLogin,
	logout,
	getProfile,
	updateProfile,
} = require("../controllers/auth");
const { authenticateUser } = require("../middlewares/authentication");

const router = Router();

router.route("/register").post(register);
router.route("/login").get(guestLogin).post(login);
router.route("/logout").get(authenticateUser, logout);
router
	.route("/me")
	.get(authenticateUser, getProfile)
	.patch(authenticateUser, updateProfile);

module.exports = router;
