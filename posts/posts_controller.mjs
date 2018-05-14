import Post from "./posts_model.mjs";

export async function create(req, res, next) {
  try {
    const post = await Post.create({ text: req.body.text, userId: req.userId });
    res.status(200).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function get(req, res, next) {
  try {
    const posts = await Post.findAll({ where: { userId: req.userId } });
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send(error);
  }
}
