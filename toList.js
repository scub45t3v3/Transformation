(function() {
  var _, toList;

  _ = require('underscore');

  toList = function(value, opt = {}) {
    var last;
    _.defaults(opt, {
      delimiter: ', ',
      last: ' and '
    });
    value = _.filter(_.flatten([value]), function(v) {
      return (v != null) && v !== '';
    });
    last = value != null ? typeof value.pop === "function" ? value.pop() : void 0 : void 0;
    if (!Array.isArray(value) || !(value != null ? value.length : void 0)) {
      return `${last}` || '';
    }
    last = `${opt.last}${last}`;
    value = value != null ? value.join(opt.delimiter) : void 0;
    return `${value}${last}`;
  };

  module.exports = toList;

}).call(this);
