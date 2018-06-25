(function() {
  var toLines, toTokens;

  toTokens = require('./toTokens');

  toLines = function(value) {
    return toTokens(value, /\r\n?|\n/gm);
  };

  module.exports = toLines;

}).call(this);
