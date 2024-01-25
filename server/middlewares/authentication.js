const { UnauthenticatedError, UnauthorizedError } = require("../errors");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res, next) => {
	let { token } = req.cookies;

	if (!token || token === "undefined") {
		const authHeader = req.headers.authorization;
		if (!authHeader || !authHeader.startsWith("Bearer"))
			throw new UnauthenticatedError("Authentication Failed!");
		token = authHeader.split(" ")[1];
	}

	if (token === "null" || token === "undefined")
		throw new UnauthenticatedError("Authentication Failed!");

	const { _id } = jwt.verify(token, process.env.JWT_SECRET);
	req.user = await User.findById(_id);
	next();
};

const authorizedUser = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role))
			throw new UnauthorizedError("Unauthorized to access tis route");
		next();
	};
};

module.exports = { authenticateUser, authorizedUser };
