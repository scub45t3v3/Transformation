'use strict';

(() => {
  // include dependencies
  const toList = require('./toList');

  const toListSerial = (value, opt = {}) => {
    opt = Object.assign({
      delimiter: ', ',
      last: ' and ',
    }, opt);

    opt.last = `${opt.delimiter}${opt.last}`.replace(/\s+/, ' ');

    return toList(value, opt);
  }; // end toListSerial

  // export toListSerial as commonjs module
  module.exports = toListSerial;
})(); // end IIFE