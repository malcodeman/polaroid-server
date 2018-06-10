import express from "express";

import {
  findByUsername,
  findAll,
  findMe,
  updateMe
} from "./users_controller.mjs";
import { requireAuthentication } from "../auth/auth_middleware.mjs";

const router = express.Router();

router.use(requireAuthentication);

router.get("/me", findMe);
router.put("/me", updateMe);
router.get("/:username", findByUsername);
router.get("/", findAll);

export default router;
