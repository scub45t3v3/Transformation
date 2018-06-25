(function() {
  var singular, toSingular;

  ({singular} = require('pluralize'));

  toSingular = function(value) {
    return singular(value);
  };

  module.exports = toSingular;

}).call(this);
