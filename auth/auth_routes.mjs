import express from "express";
import { create, login } from "./auth_controller.mjs";

const router = express.Router();

router.post("/signup", create);
router.post("/login", login);

export default router;
