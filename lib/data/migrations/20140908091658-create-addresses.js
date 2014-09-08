var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('addresses', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: 'string',
      notNull: true
    },
    address: {
      type: 'string',
      notNull: true
    },   
    sub_address: {
      type: 'string'
    },
    createdAt: {
      type: 'datetime',
      notNull: true
    },
    updatedAt: {
      type: 'datetime'
    }
  }, callback)

};

exports.down = function(db, callback) {
  db.dropTable('addresses', callback);
};

