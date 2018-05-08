import express from "express";
import { create, get, post } from "../controllers/users_controller.mjs";

const router = express.Router();

router.get("/", get);
router.post("/", create);
router.post("/post", post);

export default router;
