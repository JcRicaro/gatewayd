var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {

  db.addColumn('gateway_transactions', 'policy_name', {
    type: 'string',
    notNull: true
  }, function() {

  db.addColumn('gateway_transactions', 'in_transaction_id', {
    type: 'int',
    notNull: true,
    unique: true
  }, function() {

  db.addColumn('gateway_transactions', 'out_transaction_id', {
    type: 'int',
    unique: true
  }, callback);

  });
  });

};

exports.down = function(db, callback) {

  db.removeColumn('gateway_transactions', 'policy_name', function() {
  db.removeColumn('gateway_transactions', 'policy_name', function() {
  db.removeColumn('gateway_transactions', 'policy_name', callback);
  });
  });

};
