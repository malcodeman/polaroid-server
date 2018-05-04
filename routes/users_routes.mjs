import express from "express";
import { create } from "../controllers/users_controller.mjs";

const router = express.Router();

router.post("/", create);

export default router;
