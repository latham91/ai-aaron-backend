import { Router } from "express";
import { createImage } from "../controllers/dalleController.js";

const router = Router();

router.route("/").post(createImage);

export default router;
