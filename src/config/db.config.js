const { Sequelize } = require("sequelize");

const cliente = new Sequelize({
  host: "localhost",
  dialect: "postgres",
  database: "",
  username: "",
  password: "",
});

module.exports = cliente;
