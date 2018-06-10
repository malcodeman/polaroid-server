import Sequelize from "sequelize";

import sequelize from "../connection.mjs";
import Post from "../posts/posts_model.mjs";

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
Post.belongsTo(User);

export default User;
