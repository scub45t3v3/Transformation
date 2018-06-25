(function() {
  var toList, toListSerial;

  toList = require('./toList');

  toListSerial = function(value, opt = {}) {
    opt.delimiter || (opt.delimiter = ', ');
    opt.last || (opt.last = ' and ');
    opt.last = `${opt.delimiter}${opt.last}`.replace(/\s+/, ' ');
    return toList(value, opt);
  };

  module.exports = toListSerial;

}).call(this);
