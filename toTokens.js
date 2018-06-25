(function() {
  var toTokens;

  toTokens = function(value, delimiter = /\s+/) {
    var ref;
    return (value != null ? typeof value.toString === "function" ? (ref = value.toString()) != null ? typeof ref.split === "function" ? ref.split(delimiter) : void 0 : void 0 : void 0 : void 0) || [];
  };

  module.exports = toTokens;

}).call(this);
