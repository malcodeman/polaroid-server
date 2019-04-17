import express from "express";

import {
  findMe,
  updateName,
  updateEmail,
  updatePassword,
  findByUsername,
  findAll
} from "./users_controller";
import { requireAuthentication } from "../auth/auth_middleware";

const router = express.Router();

router.get("/me", requireAuthentication, findMe);
router.put("/me/name", requireAuthentication, updateName);
router.put("/me/email", requireAuthentication, updateEmail);
router.put("/me/password", requireAuthentication, updatePassword);
router.get("/:username", findByUsername);
router.get("/", requireAuthentication, findAll);

export default router;
