import Sequelize from "sequelize";

import sequelize from "../connection.mjs";
import Comment from "../comments/comments_model.mjs";
import Like from "../likes/likes_model.mjs";

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
Comment.belongsTo(Post);
Like.belongsTo(Post);

export default Post;
