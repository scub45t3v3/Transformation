'use strict';

(() => {
  // include dependencies
  const _ = require('underscore');

  const toList = (value, opt = {}) => {
    _.defaults(opt, {
      delimiter: ', ',
      last: ' and ',
    });

    value = _.filter(_.flatten([value]), (v) => {
      return !(v == null || v === '' || Number.isNaN(v));
    });

    const last = value.pop();

    if (!Array.isArray(value) || !value.length) {
      return `${last}` || '';
    }

    return `${value.join(opt.delimiter)}${opt.last}${last}`;
  }; // end toList

  // export toList as commonjs module
  module.exports = toList;
})(); // end IIFE