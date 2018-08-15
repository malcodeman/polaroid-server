import Sequelize from "sequelize";

import sequelize from "../connection";
import Comment from "../comments/comments_model";
import Like from "../likes/likes_model";
import Bookmark from "../bookmarks/bookmarks_model";

const Post = sequelize.define("post", {
  photoURL: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Post.hasMany(Comment);
Post.hasMany(Like);
Post.hasMany(Bookmark);

Comment.belongsTo(Post);
Like.belongsTo(Post);
Bookmark.belongsTo(Post);

export default Post;
