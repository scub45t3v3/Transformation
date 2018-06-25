(function() {
  var _, toArray, toWords;

  _ = require('underscore');

  toWords = require('./toWords');

  toArray = function(value = [], opt = {}) {
    if (value instanceof String || typeof value === 'string') {
      value = toWords(value);
    }
    if (!Array.isArray(value)) {
      value = (typeof Array !== "undefined" && Array !== null ? typeof Array.from === "function" ? Array.from(value) : void 0 : void 0) || _.values(value);
    }
    if (!!(opt != null ? opt.flatten : void 0)) {
      value = _.flatten(value);
    }
    if (typeof (opt != null ? opt.filter : void 0) === 'function') {
      value = _.filter(value, opt.filter);
    }
    return value;
  };

  module.exports = toArray;

}).call(this);
