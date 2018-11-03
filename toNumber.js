'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:transformation:toNumber');

  const toNumber = (value) => {
    debug('call:toNumber(%o)', value);

    return Number(value);
  }; // end toNumber

  // export toNumber as commonjs module
  module.exports = toNumber;
})(); // end IIFE