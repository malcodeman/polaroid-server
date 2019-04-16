import Bookmark from "./bookmarks_model";
import Post from "../posts/posts_model";

export async function createBookmark(postId, userId) {
  try {
    const bookmark = await Bookmark.create({ postId, userId });
    const post = await Post.findOne({
      where: { id: bookmark.postId }
    });

    bookmark.setDataValue("post", post);
    return bookmark;
  } catch (error) {
    throw error;
  }
}

export async function destroyBookmark(postId, userId) {
  try {
    const bookmark = await Bookmark.findOne({
      where: {
        postId,
        userId
      },
      attributes: ["id", "postId"]
    });

    await bookmark.destroy();
    return bookmark;
  } catch (error) {
    throw error;
  }
}

export default { createBookmark, destroyBookmark };
