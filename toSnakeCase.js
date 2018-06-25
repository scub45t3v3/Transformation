(function() {
  var toSnakeCase;

  toSnakeCase = function(value) {
    return value != null ? typeof value.toString === "function" ? value.toString().trim().replace(/(?:\W|_)+/gm, '_').replace(/([a-z])([A-Z])/gm, '$1_$2').toLowerCase() : void 0 : void 0;
  };

  module.exports = toSnakeCase;

}).call(this);
