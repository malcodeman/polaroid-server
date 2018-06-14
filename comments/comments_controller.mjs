import Comment from "./comments_model.mjs";

export async function create(req, res, next) {
  try {
    const { body, postId } = req.body;
    const comment = await Comment.create({ body, userId: req.userId, postId });
    res.status(200).send(comment);
  } catch (error) {
    res.status(400).send(error);
  }
}
