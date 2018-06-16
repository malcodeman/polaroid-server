import Post from "./posts_model.mjs";
import Comment from "../comments/comments_model.mjs";
import User from "../users/users_model.mjs";
import Like from "../likes/likes_model.mjs";
import Bookmark from "../bookmarks/bookmarks_model.mjs";

import sequelize from "../connection.mjs";

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
    let posts = await Post.findAll({
      attributes: [
        "id",
        "createdAt",
        "photoURL",
        [sequelize.fn("COUNT", sequelize.col("likes.id")), "likesCount"]
      ],
      order: [["id", "DESC"], [Comment, "id", "ASC"]],
      group: ["post.id", "comments.id"],
      include: [
        {
          model: User,
          attributes: ["username", "profilePhotoURL", "nameFirstLetter"]
        },
        {
          model: Like,
          attributes: []
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
    async function liked(postId) {
      const like = await Like.findOne({
        attributes: ["id"],
        where: {
          postId,
          userId: req.userId
        }
      });
      if (like) {
        return Object({ likeId: like.dataValues.id });
      } else {
        return false;
      }
    }
    async function bookmarked(postId) {
      const bookmark = await Bookmark.findOne({
        attributes: ["id"],
        where: {
          postId,
          userId: req.userId
        }
      });
      if (bookmark) {
        return Object({ bookmarkId: bookmark.dataValues.id });
      } else {
        return false;
      }
    }
    for (let i = 0; i < posts.length; ++i) {
      posts[i].dataValues.liked = await liked(posts[i].dataValues.id);
      posts[i].dataValues.bookmarked = await bookmarked(posts[i].dataValues.id);
    }
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send(error);
  }
}
