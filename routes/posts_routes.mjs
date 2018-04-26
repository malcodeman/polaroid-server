import express from "express";
import { create, get } from "../controllers/posts_controller.mjs";

const router = express.Router();

router.get("/", get);
router.post("/", create);

export default router;
