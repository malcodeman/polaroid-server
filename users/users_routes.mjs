import express from "express";
import { get } from "./users_controller.mjs";

const router = express.Router();

router.get("/me", get);

export default router;
