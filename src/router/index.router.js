import { Router } from "express";
import IndexController from "../controllers/index.controller.js";

const indexRouter = Router();
const indexController = new IndexController();

indexRouter.get("/", indexController.index);

export default indexRouter;