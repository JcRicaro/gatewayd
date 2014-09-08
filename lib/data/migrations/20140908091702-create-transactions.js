var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {

  db.createTable('transactions', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },  
    uid: {
      type: 'string',
      unique: true
    },
    invoice: {
      type: 'string'
    },
    in_address_id: {
      type: 'int',
      notNull: true
    },  
    in_currency: {
      type: 'string',
      notNull: true
    },
    in_amount: {
      type: 'decimal',
      notNull: true
    },  
    in_issuer: {
      type: 'string'
    },
    out_address_id: {
      type: 'int',
      notNull: true
    },   
    out_currency: {
      type: 'string',
      notNull: true
    },
    out_amount: {
      type: 'decimal',
      notNull: true
    },  
    out_issuer: {
      type: 'string'
    },
    state: {
      type: 'string',
      notNull: true
    },
    error: {
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
  db.dropTable('transactions', callback);
};
