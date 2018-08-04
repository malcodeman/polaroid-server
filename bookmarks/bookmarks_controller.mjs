import Bookmark from "./bookmarks_model.mjs";
import Post from "../posts/posts_model.mjs";

export async function create(req, res, next) {
  try {
    const { postId } = req.body;
    const bookmark = await Bookmark.create({ userId: req.userId, postId });
    const id = postId;
    const post = await Post.findOne({
      where: { id }
    });
    bookmark.dataValues.post = post.dataValues;
    res.status(200).send(bookmark);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function destroy(req, res, next) {
  try {
    const { id } = req.params;
    const bookmark = await Bookmark.findOne({
      where: {
        id
      }
    });
    await bookmark.destroy();
    res.status(200).send(bookmark);
  } catch (error) {
    res.status(400).send(error);
  }
}
