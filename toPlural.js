'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:transformation:toPlural');
  const {plural} = require('pluralize');

  const toPlural = (value) => {
    debug('call:toPlural(%o)', value);

    return plural(value);
  }; // end toPlural

  // export toPlural as commonjs module
  module.exports = toPlural;
})(); // end IIFE