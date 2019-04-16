import express from "express";

import { requireAuthentication } from "../auth/auth_middleware";
import {
  create,
  findAll,
  like,
  dislike,
  saveBookmark,
  removeBookmark,
  addComment
} from "./posts_controller";

const router = express.Router();

router.use(requireAuthentication);
router.post("/", create);
router.get("/", findAll);
router.post("/:id/likes", like);
router.delete("/:id/likes", dislike);
router.post("/:id/bookmarks", saveBookmark);
router.delete("/:id/bookmarks", removeBookmark);
router.post("/comments", addComment);

export default router;
