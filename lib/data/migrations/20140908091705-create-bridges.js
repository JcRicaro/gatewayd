var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('bridges', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    in_address_id: {
      type: 'int',
      notNull: true
    },
    out_address_id: {
      type: 'int',
      notNull: true
    },   
    data: {
      type: 'string'
    },
    createdAt: {
      type: 'datetime',
      notNull: true
    },
    updatedAt: {
      type: 'datetime'
    },
  }, callback)

};

exports.down = function(db, callback) {
  db.dropTable('bridges', callback);
};

