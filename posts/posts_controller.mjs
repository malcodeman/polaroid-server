import Post from "./posts_model.mjs";
import Comment from "../comments/comments_model.mjs";
import User from "../users/users_model.mjs";

export async function create(req, res, next) {
  try {
    const { photoURL } = req.body;
    const post = await Post.create({ photoURL, userId: req.userId });
    res.status(200).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function findAll(req, res, next) {
  try {
    const posts = await Post.findAll({
      order: [["id", "DESC"], [Comment, "id", "ASC"]],
      include: [
        {
          model: User,
          attributes: ["username", "profilePhotoURL", "nameFirstLetter"]
        },
        {
          model: Comment,
          attributes: ["id", "body"],
          include: [
            {
              model: User,
              attributes: ["id", "username"]
            }
          ]
        }
      ]
    });
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send(error);
  }
}
