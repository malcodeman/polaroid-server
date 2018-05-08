import Sequelize from "sequelize";

const sequelize = new Sequelize("confessio", "root", "toor", {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    operatorsAliases: false
  });

  export default sequelize;