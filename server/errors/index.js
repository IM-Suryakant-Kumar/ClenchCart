class CustomAPIError extends Error {
	constructor(message) {
		super(message);
	}
}

class BadRequestError extends CustomAPIError {
	constructor(message) {
		super(message);
		this.statuCode = 400;
	}
}

class NotFoundError extends CustomAPIError {
	constructor(message) {
		super(message);
		this.statuCode = 404;
	}
}

class UnauthenticatedError extends CustomAPIError {
	constructor(message) {
		super(message);
		this.statuCode = 401;
	}
}

class UnauthorizedError extends CustomAPIError {
	constructor(message) {
		super(message);
		this.statuCode = 403;
	}
}

module.exports = {
	BadRequestError,
	NotFoundError,
	UnauthenticatedError,
	UnauthorizedError,
};
