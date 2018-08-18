'use strict';

(() => {
  // include dependencies
  const {plural} = require('pluralize');

  const toPlural = (value) => {
    return plural(value);
  }; // end toPlural

  // export toPlural as commonjs module
  module.exports = toPlural;
})(); // end IIFE