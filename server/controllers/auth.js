import { BadRequestError, UnauthenticatedError } from "../errors";
import { User } from "../models";
import { sendToken } from "../utils";

export const register = async (req, res) => {
	const { name, email, password } = req.body;

	if (!(name && email && password))
		throw new BadRequestError("Please provide all values");

	const emailAlreadyExists = await User.findOne({ email });
	if (emailAlreadyExists) {
		throw new BadRequestError("Email is already exists");
	}

	const user = await User.create(req.body);
	res
		.status(201)
		.json({ success: true, user, message: "Registered successfully" });
};

export const login = async (req, res) => {
	const { email, password } = req.body;

	if (!(email && password))
		throw new BadRequestError("Please provide all values");

	const user = await User.findOne({ email });

	if (!user) throw new UnauthenticatedError("Invalid Credentials!");

	const isPasswordCorrect = await user.comparePassword(password);

	if (!isPasswordCorrect)
		throw new UnauthenticatedError("Invalid Credentials!");

	sendToken(res, 200, user, "Logged in successfully");
};

export const guestLogin = async (req, res) => {
	const email = process.env.GUEST_EMAIL;
	const password = process.env.GUEST_PASSWORD;

	if (!(email && password))
		throw new BadRequestError("Please provide all values");

	const user = await User.findOne({ email });

	if (!user) throw new UnauthenticatedError("Invalid Credentials!");

	const isPasswordCorrect = await user.comparePassword(password);

	if (!isPasswordCorrect)
		throw new UnauthenticatedError("Invalid Credentials!");

	sendToken(res, 200, user, "Logged in successfully");
};

export const logout = async (req, res) => {
	res
		.status(201)
		.cookie("token", null, { expires: new Date(Date.now()) })
		.json({ success: true, user, message: "Logged out successfully" });
};

export const getProfile = async (req, res) => {
	res.status(201).json({ success: true, user: req.user });
};

export const updateProfile = async (req, res) => {
	const user = await User.findByIdAndUpdate(req.user._id, req.body, {
		new: true,
	});
	res
		.status(201)
		.json({ success: true, user, message: "Profile updated successfully" });
};
