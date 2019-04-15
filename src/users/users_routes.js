import express from "express";

import { findByUsername, findAll, findMe, updateMe } from "./users_controller";
import { requireAuthentication } from "../auth/auth_middleware";

const router = express.Router();

router.get("/me", requireAuthentication, findMe);
router.put("/me", requireAuthentication, updateMe);
router.get("/:username", findByUsername);
router.get("/", requireAuthentication, findAll);

export default router;
