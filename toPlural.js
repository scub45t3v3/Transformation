(function() {
  var plural, toPlural;

  ({plural} = require('pluralize'));

  toPlural = function(value) {
    return plural(value);
  };

  module.exports = toPlural;

}).call(this);
