import express from "express";

import { create, destroy } from "./bookmarks_controller";
import { requireAuthentication } from "../auth/auth_middleware";

const router = express.Router();

router.use(requireAuthentication);
router.post("/", create);
router.delete("/:id", destroy);

export default router;
