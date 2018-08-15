import express from "express";

import { create, findAll } from "./posts_controller";
import { requireAuthentication } from "../auth/auth_middleware";

const router = express.Router();

router.use(requireAuthentication);
router.post("/", create);
router.get("/", findAll);

export default router;
