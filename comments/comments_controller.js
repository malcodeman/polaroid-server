import Comment from "./comments_model";
import User from "../users/users_model";

export async function create(req, res, next) {
  try {
    const { body, postId } = req.body;
    let comment = await Comment.create({ body, userId: req.userId, postId });
    const { id } = comment.dataValues;
    comment = await Comment.findOne({
      where: {
        id
      },
      include: [
        {
          model: User,
          attributes: ["username"]
        }
      ]
    });
    res.status(200).send(comment);
  } catch (error) {
    res.status(400).send(error);
  }
}
