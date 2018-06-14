import sequelize from "../connection.mjs";
import Sequelize from "sequelize";

const Comment = sequelize.define("comment", {
  body: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

export default Comment;
