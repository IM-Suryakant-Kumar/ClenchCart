export const sendToken = (res, statusCode, user, message) => {
	const token = user.createToken();

	res.status(statusCode).cookie("token", token, {
		expires: new Date(
			Date.now() + process.env.COOKIE_LIFETIME * 24 * 60 * 60 * 1000
		),
		httpOnly: true,
	}).json({ success: true, token, message });
};
