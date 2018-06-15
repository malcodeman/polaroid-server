import Like from "./likes_model.mjs";

export async function create(req, res, next) {
  try {
    const { postId } = req.body;
    const like = await Like.create({ userId: req.userId, postId });
    res.status(200).send(like);
  } catch (error) {
    res.status(400).send(error);
  }
}
