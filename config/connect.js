// Set up MySQL connection.
var mysql = require("mysql");

var connection;

var Sequelize = require("sequelize");

if (process.env.JAWSDB_URL) {
  connection = new Sequelize(process.env.JAWSDB_URL);
} else {
  connection = new Sequelize("burgers_db", "root", "password",{
    host: "localhost",
    port: 3306,
    dialect: "mysql"
  });
}



module.exports = connection; 

