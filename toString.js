'use strict';

(() => {
  const toString = (value) => {
    if (value == null) {
      value = '';
    }

    return value.toString() || `${value}`;
  }; // end toString

  // expor toString as commonjs module
  module.exports = toString;
})(); // end IIFE