import sequelize from "../connection.mjs";
import Sequelize from "sequelize";

const Post = sequelize.define("post", {
  text: {
    type: Sequelize.TEXT,
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
