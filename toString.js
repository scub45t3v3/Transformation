'use strict';

(() => {
  const toString = (value) => {
    try {
      return value.toString();
    } catch (err) {
      return '';
    }
  }; // end toString

  // expor toString as commonjs module
  module.exports = toString;
})(); // end IIFE