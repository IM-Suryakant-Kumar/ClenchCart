require("express-async-errors");
require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./db");
const notFoundMiddleware = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const authRouter = require("./routes/auth");

const app = express();

// constant
const CLIENT_URL = process.env.CLIENT_URL;
const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(helmet());
app.use(morgan("tiny"));

// routers
app.use("/auth", authRouter);

// errorHandler
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
// app
const start = async () => {
	try {
		await connectDB(MONGO_URL);
		app.listen(PORT, () =>
			console.log(`Server is listening on port ${PORT}...`)
		);
	} catch (error) {
		console.log(error);
	}
};

start();
