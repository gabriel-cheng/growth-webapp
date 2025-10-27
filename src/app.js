import express from "express";
import router from "./router/index.router.js";
import envValidation from "./helpers/env_validate.helper.js";

envValidation();

const app = express();

app.use(express.json());

app.use("/", router);

export default app;