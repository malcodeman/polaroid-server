import Sequelize from "sequelize";

import sequelize from "../connection.mjs";
import Comment from "../comments/comments_model.mjs";

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
Comment.belongsTo(Comment);

export default Post;
