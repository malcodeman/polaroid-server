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
    const id = req.userId;
    const me = await User.findOne({
      where: { id },
      attributes: ["username", "nameFirstLetter", "profilePhotoURL"]
    });
    post.dataValues.user = {
      username: me.dataValues.username,
      nameFirstLetter: me.dataValues.nameFirstLetter,
      profilePhotoURL: me.dataValues.profilePhotoURL
    };
    post.dataValues.comments = [];
    post.dataValues.likesCount = 0;
    post.dataValues.liked = false;
    res.status(200).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function findAll(req, res, next) {
  try {
    let posts = await Post.findAll({
      attributes: ["id", "createdAt", "photoURL"],
      order: [["id", "DESC"]],
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
      }
      return false;
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
      }
      return false;
    }
    async function likesCount(postId) {
      return await Like.count({
        where: {
          postId
        }
      });
    }
    for (let post of posts) {
      post.dataValues.liked = await liked(post.dataValues.id);
      post.dataValues.bookmarked = await bookmarked(post.dataValues.id);
      post.dataValues.likesCount = await likesCount(post.dataValues.id);
    }
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send(error);
  }
}
