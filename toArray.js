'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:transformation:toArray');
  const {flatten, pairs} = require('underscore');
  const toWords = require('./toWords');

  const toArray = (value, opt = {}) => {
    debug('call:toArray(%o, %o)', value, opt);

    if (value instanceof String || typeof value === 'string') {
      value = toWords(value);
    }

    try {
      value = (Array.from(value).length && Array.from(value)) || pairs(value);
    } catch (err) {
      value = pairs(value);
    }

    if (opt.flatten) {
      value = flatten(value);
    }

    return value;
  }; // end toArray

  // export toArray as commonjs module
  module.exports = toArray;
})(); // end IIFE