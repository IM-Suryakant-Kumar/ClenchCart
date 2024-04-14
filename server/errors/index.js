export class CustomAPIError extends Error {
	constructor(message) {
		super(message);
	}
}

export class BadRequestError extends CustomAPIError {
	constructor(message) {
		super(message);
		this.statuCode = 400;
	}
}

export class NotFoundError extends CustomAPIError {
	constructor(message) {
		super(message);
		this.statuCode = 404;
	}
}

export class UnauthenticatedError extends CustomAPIError {
	constructor(message) {
		super(message);
		this.statuCode = 401;
	}
}

export class UnauthorizedError extends CustomAPIError {
	constructor(message) {
		super(message);
		this.statuCode = 403;
	}
}
