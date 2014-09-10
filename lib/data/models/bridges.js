var database = require(__dirname+"/../sequelize.js");
var Sequelize = require("sequelize");

var Bridge = database.define('bridges', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  policy_name: {
    type: Sequelize.STRING,
    validate: {
      notNull: true
    }
  },
  in_address_id: {
    type: Sequelize.INTEGER,
    validate: {
      notNull: true
    }
  },
  out_address_id: {
    type: Sequelize.INTEGER,
    validate: {
      notNull: true
    }
  }
});

module.exports = Bridge

