'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:transformation:toString');

  const toString = (value) => {
    debug('call:toString(%o)', value);

    try {
      return value.toString();
    } catch (err) {
      return '';
    }
  }; // end toString

  // expor toString as commonjs module
  module.exports = toString;
})(); // end IIFE