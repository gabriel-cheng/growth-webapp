import express from "express";
import indexRouter from "./router/index.router.js";
import envValidation from "./helpers/env_validate.helper.js";
import userRouter from "./router/user.router.js";

envValidation();

const app = express();

app.use(express.json());

app.use("/", indexRouter);
app.use("/user", userRouter);

export default app;