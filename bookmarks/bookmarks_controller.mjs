import Bookmark from "./bookmarks_model.mjs";

export async function create(req, res, next) {
  try {
    const { postId } = req.body;
    const bookmark = await Bookmark.create({ userId: req.userId, postId });
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
