import express from "express";
import { create } from "./auth_controller.mjs";

const router = express.Router();

router.post("/signup", create);

export default router;
