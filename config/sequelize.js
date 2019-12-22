var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("./connect.js");

// Creates a "burger" model that matches up with DB
var burger = sequelize.define("burgers", {
  burger_name: Sequelize.STRING,
  devoured: Sequelize.BOOLEAN
});

// Syncs with DB
burger.sync();

// Makes the burger Model available for other files (will also create a table)
module.exports = burger;
