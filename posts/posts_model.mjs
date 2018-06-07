import sequelize from "../connection.mjs";
import Sequelize from "sequelize";

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

export default Post;
