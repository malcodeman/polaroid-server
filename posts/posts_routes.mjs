import express from "express";

import { create, get } from "./posts_controller.mjs";
import { requireAuthentication } from "../auth/auth_middleware.mjs";

const router = express.Router();

router.use(requireAuthentication);
router.post("/", create);
router.get("/", get);

export default router;
