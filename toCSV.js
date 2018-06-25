(function() {
  var parse, toCSV;

  ({parse} = require('json2csv'));

  toCSV = function(value, opt = {}) {
    return parse(value, opt);
  };

  module.exports = toCSV;

}).call(this);
