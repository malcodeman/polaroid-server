import Sequelize from "sequelize";

const { DB_URL } = process.env;

const sequelize = new Sequelize(DB_URL, {
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
});

sequelize.sync();

export default sequelize;
