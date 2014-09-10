var database = require(__dirname+"/../sequelize.js");
var Sequelize = require("sequelize");

var Address = database.define('addresses', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  type: {
    type: Sequelize.STRING,
    validate: {
      notNull: true
    }
  },
  address: {
    type: Sequelize.STRING,
    validate: {
      notNull: true
    }
  },
  sub_address: {
    type: Sequelize.STRING
  }
});

module.exports = Policy

