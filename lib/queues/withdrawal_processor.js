var gateway = require(__dirname+'/../../');
var EventEmitter = require('events').EventEmitter;

var queue = new EventEmitter();

function pollIncoming(fn) {
  gateway.api.listIncomingPayments(function(err, payments) {
    if (err) {
      logger.error(err);
    } else {
      if (payments[0]) {
        queue.emit('payment:withdrawal', payments[0]);
      } 
    }
    setTimeout(function() {
      fn(pollIncoming);
    },500);
  });
}

queue.work = function() {
  pollIncoming(pollIncoming);
};

module.exports = queue;

