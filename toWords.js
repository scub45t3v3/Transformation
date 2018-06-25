(function() {
  var toTokens, toWords;

  toTokens = require('./toTokens');

  toWords = function(value) {
    return toTokens(value, /[!?.]?[\s,]+/);
  };

  module.exports = toWords;

}).call(this);
