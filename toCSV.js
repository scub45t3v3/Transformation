'use strict';

(() => {
  // include dependencies
  const {parse} = require('json2csv');

  const toCSV = (value, opt = {}) => {
    return parse(value, opt);
  };

  // export toCSV as commonjs module
  module.exports = toCSV;
})(); // end IIFE