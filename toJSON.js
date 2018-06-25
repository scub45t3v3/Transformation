(function() {
  var toJSON;

  toJSON = function(value, space = 2) {
    return JSON.stringify(value, null, space);
  };

  module.exports = toJSON;

}).call(this);
