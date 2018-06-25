(function() {
  var REGEX, toBoolean;

  REGEX = /^(?:0+|\-|null|undefined|NaN|off|f(?:alse)?|no(?:ne)?|neg(?:ative)?|)$/i; // 0
  // -
  // null
  // undefined
  // NaN
  // off
  // f or false
  // no or none
  // neg or negative
  // empty string

  toBoolean = function(value) {
    var ref;
    return !!value && !REGEX.test((ref = (value != null ? typeof value.toString === "function" ? value.toString() : void 0 : void 0) || `${value}`) != null ? typeof ref.trim === "function" ? ref.trim() : void 0 : void 0);
  };

  module.exports = toBoolean;

}).call(this);
