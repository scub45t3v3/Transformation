(function() {
  var toString, toWrap;

  toString = require('./toString');

  toWrap = function(value, opt = {}) {
    opt.start = toString(opt.start) || toString(opt.end);
    opt.end = toString(opt.end) || opt.start;
    value = toString(value);
    return `${opt.start}${value}${opt.end}`;
  };

  module.exports = toWrap;

}).call(this);
