(function() {
  var toKebabCase;

  toKebabCase = function(value) {
    return value != null ? typeof value.toString === "function" ? value.toString().trim().replace(/(?:\W|_)+/gm, '-').replace(/([a-z])([A-Z])/gm, '$1-$2').toLowerCase() : void 0 : void 0;
  };

  module.exports = toKebabCase;

}).call(this);
