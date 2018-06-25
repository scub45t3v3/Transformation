(function() {
  var toPascalCase;

  toPascalCase = function(value) {
    return value != null ? typeof value.toString === "function" ? value.toString().trim().replace(/(?:\W|_)+/gm, '_').replace(/^_+/, '').replace(/_+$/, '').replace(/_(.)/gm, function(match, char) {
      return (char != null ? typeof char.toUpperCase === "function" ? char.toUpperCase() : void 0 : void 0) || char;
    }).replace(/^[a-z]/, function(match) {
      return (match != null ? typeof match.toUpperCase === "function" ? match.toUpperCase() : void 0 : void 0) || match;
    }) : void 0 : void 0;
  };

  module.exports = toPascalCase;

}).call(this);
