(function() {
  var toString;

  toString = function(value) {
    if (value == null) {
      value = '';
    }
    return (value != null ? typeof value.toString === "function" ? value.toString() : void 0 : void 0) || `${value}`;
  };

  module.exports = toString;

}).call(this);
