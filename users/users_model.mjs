import sequelize from "../connection.mjs";
import Sequelize from "sequelize";

const User = sequelize.define("user", {
  email: Sequelize.STRING,
  password: Sequelize.STRING
});

export default User;
