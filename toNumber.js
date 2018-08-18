'use strict';

(() => {
  const toNumber = (value) => {
    return Number(value);
  }; // end toNumber

  // export toNumber as commonjs module
  module.exports = toNumber;
})(); // end IIFE