import Like from "./likes_model";

export async function createLike(postId, userId) {
  try {
    const like = await Like.create({ postId, userId });

    return like;
  } catch (error) {
    throw error;
  }
}

export async function destroyLike(postId, userId) {
  try {
    const like = await Like.findOne({
      where: {
        postId,
        userId
      },
      attributes: ["id", "postId"]
    });

    await like.destroy();
    return like;
  } catch (error) {
    throw error;
  }
}

export default { createLike, destroyLike };
