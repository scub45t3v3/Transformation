'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:transformation:toFormat');
  const {format} = require('util');

  const toFormat = (...args) => {
    debug('call:toFormat(%o)', args);

    return format(...args);
  };

  // export toFormat as commonjs module
  module.exports = toFormat;
})(); // end IIFE