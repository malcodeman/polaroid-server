import sequelize from "../connection.mjs";
import Sequelize from "sequelize";

const Post = sequelize.define("post", {
  text: Sequelize.TEXT,
  userId: Sequelize.INTEGER
});

export default Post;
