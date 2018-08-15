import Sequelize from "sequelize";

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

console.log(process.env.DB_NAME);

console.log(DB_NAME);
console.log(DB_USER);
console.log(DB_PASSWORD);
console.log(DB_HOST);

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
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
