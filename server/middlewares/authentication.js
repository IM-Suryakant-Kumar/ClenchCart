import { UnauthenticatedError, UnauthorizedError } from "../errors";
import {User} from "../models";
import jwt from "jsonwebtoken";

export const authenticateUser = async (req, res, next) => {
	let { token } = req.cookies;

	if (!token || token === "undefined") {
		const authHeader = req.headers.authorization;
		if (!authHeader || !authHeader.startsWith("Bearer"))
			throw new UnauthenticatedError("Authentication Failed!");
		token = authHeader.split(" ")[1];
	}

	if (!token || token === "null" || token === "undefined")
		throw new UnauthenticatedError("Authentication Failed!");

	const { _id } = jwt.verify(token, process.env.JWT_SECRET);
	req.user = await User.findById(_id);
	next();
};

export const authorizedUser = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role))
			throw new UnauthorizedError("Unauthorized to access tis route");
		next();
	};
};
