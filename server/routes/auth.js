const { Router } = require("express");
const {
	register,
	login,
	guestLogin,
	logout,
	getProfile,
	updateProfile,
} = require("../controllers/auth");

const router = Router();

router.route("/register").post(register);
router.route("/login").get(guestLogin).post(login);
router.route("/logout").get(logout);
router.route("/me").get(getProfile).patch(updateProfile);

module.exports = router;
