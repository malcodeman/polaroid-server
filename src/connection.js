import Sequelize from "sequelize";

const { DATABASE_URL, DATABASE_HOST } = process.env;

const sequelize = new Sequelize(DATABASE_URL, {
  host: DATABASE_HOST,
  dialect: "postgres",
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
