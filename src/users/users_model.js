import Sequelize from "sequelize";

import sequelize from "../connection";
import Post from "../posts/posts_model";
import Comment from "../comments/comments_model";
import Like from "../likes/likes_model";
import Bookmark from "../bookmarks/bookmarks_model";

const User = sequelize.define("user", {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  nameFirstLetter: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  profilePhotoURL: {
    type: Sequelize.STRING,
    defaultValue: null
  }
});

User.hasMany(Post);
User.hasMany(Comment);
User.hasMany(Like);
User.hasMany(Bookmark);

Post.belongsTo(User);
Comment.belongsTo(User);
Like.belongsTo(User);
Bookmark.belongsTo(User);

export default User;
