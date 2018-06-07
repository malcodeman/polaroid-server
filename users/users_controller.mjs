import User from "../users/users_model.mjs";
import Post from "../posts/posts_model.mjs";

export async function findByUsername(req, res, next) {
  try {
    const { username } = req.params;
    const user = await User.findOne({
      where: {
        username
      },
      attributes: {
        exclude: ["email", "password"]
      },
      include: [
        {
          model: Post
        }
      ]
    });
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function findAll(req, res, next) {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function findMe(req, res, next) {
  try {
    const id = req.userId;
    const me = await User.findAll({
      where: { id },
      attributes: {
        exclude: ["password"]
      }
    });
    res.status(200).send(me[0]);
  } catch (error) {
    res.status(400).send(error);
  }
}
