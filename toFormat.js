(function() {
  var format, toFormat;

  ({format} = require('util'));

  toFormat = function(...args) {
    return format(...args);
  };

  module.exports = toFormat;

}).call(this);
