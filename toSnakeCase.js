'use strict';

(() => {
  // include dependencies
  const toString = require('./toString');

  const toSnakeCase = (value) => {
    return toString(value)
      .trim()
      .replace(/(?:\W|_)+/gm, '_')
      .replace(/([a-z])([A-Z])/gm, '$1_$2')
      .toLowerCase();
  }; // end toSnakeCase

  // export toSnakeCase as commonjs module
  module.exports = toSnakeCase;
})(); // end IIFE