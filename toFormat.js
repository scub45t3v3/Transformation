'use strict';

(() => {
  // include dependencies
  const {format} = require('util');

  const toFormat = (...args) => {
    return format(...args);
  };

  // export toFormat as commonjs module
  module.exports = toFormat;
})(); // end IIFE