import Sequelize from "sequelize";

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DATABASE_URL } = process.env;

const sequelize = new Sequelize(DATABASE_URL, {
  host: DB_HOST,
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
