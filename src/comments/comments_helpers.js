import Comment from "./comments_model";
import User from "../users/users_model";

export async function createComment(postId, userId, body) {
  try {
    const comment = await Comment.create({ postId, userId, body });
    const user = await User.findOne({
      where: { id: userId },
      attributes: ["username"]
    });

    comment.setDataValue("user", user);
    return comment;
  } catch (error) {
    throw error;
  }
}

export default { createComment };
