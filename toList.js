'use strict';

(() => {
  // include dependencies
  const {flatten} = require('underscore');

  const toList = (value, opt = {}) => {
    opt = Object.assign({
      delimiter: ', ',
      last: ' and ',
    }, opt);

    value = flatten([value]).filter((v) => {
      return !(v == null || v === '' || Number.isNaN(v));
    });

    const last = value.pop();

    if (!value.length) {
      return `${last}`;
    }

    return `${value.join(opt.delimiter)}${opt.last}${last}`;
  }; // end toList

  // export toList as commonjs module
  module.exports = toList;
})(); // end IIFE