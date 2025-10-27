import { Router } from "express";
import IndexController from "../controllers/index.controller.js";

const router = Router();
const indexController = new IndexController();

router.get("/", indexController.index);
router.get("/generate_token", indexController.generateTokenEndpoint);

export default router;