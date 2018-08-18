'use strict';

(() => {
  // include dependencies
  const _ = require('underscore');
  const toWords = require('./toWords');

  const toArray = (value = [], opt = {}) => {
    if (value instanceof String || typeof value === 'string') {
      value = toWords(value);
    }

    if (!Array.isArray(value)) {
      value = Array.from(value) || _.values(value);
    }

    if (opt.flatten) {
      value = _.flatten(value);
    }

    if (typeof opt.filter === 'function') {
      value = _.filter(value, opt.filter);
    }

    return value;
  }; // end toArray

  // export toArray as commonjs module
  module.exports = toArray;
})(); // end IIFE