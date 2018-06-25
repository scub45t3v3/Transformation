(function() {
  var toCamelCase;

  toCamelCase = function(value) {
    return value != null ? typeof value.toString === "function" ? value.toString().trim().replace(/(?:\W|_)+/gm, '_').replace(/^_+/, '').replace(/_+$/, '').replace(/_(.)/gm, function(match, char) {
      return (char != null ? typeof char.toUpperCase === "function" ? char.toUpperCase() : void 0 : void 0) || char;
    }).replace(/^[A-Z]/, function(match) {
      return (match != null ? typeof match.toLowerCase === "function" ? match.toLowerCase() : void 0 : void 0) || match;
    }) : void 0 : void 0;
  };

  module.exports = toCamelCase;

}).call(this);
