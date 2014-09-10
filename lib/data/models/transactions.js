var database = require(__dirname+"/../sequelize.js");
var Sequelize = require("sequelize");

var Transaction = database.define('policies', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  uid: {
    type: Sequelize.STRING
  },
  invoice: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING,
    validate: {
      notNull: true
    }
  },
  error: {
    type: Sequelize.STRING
  },
  in_address_id: {
    type: Sequelize.STRING,
    validate: {
      notNull: true
    }
  },
  in_amount: {
    type: Sequelize.DECIMAL
    validate: {
      notNull: true
    }
  },
  in_currency: {
    type: Sequelize.STRING,
    validate: {
      notNull: true
    }
  },
  in_issuer: {
    type: Sequelize.STRING
  }
  out_address_id: {
    type: Sequelize.INTEGER,
    validate: {
      notNull: true
    }
  },
  out_amount: {
    type: Sequelize.DECIMAL
    validate: {
      notNull: true
    }
  },
  out_currency: {
    type: Sequelize.STRING,
    validate: {
      notNull: true
    }
  },
  out_issuer: {
    type: Sequelize.STRING
  }
});

module.exports = Transaction;

