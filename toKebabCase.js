'use strict';

(() => {
  // include dependencies
  const toString = require('./toString');

  const toKebabCase = (value) => {
    return toString(value)
      .trim()
      .replace(/(?:\W|_)+/gm, '-')
      .replace(/([a-z])([A-Z])/gm, '$1-$2')
      .toLowerCase();
  };

  // export toKebabCase as commonjs module
  module.exports = toKebabCase;
})(); // end IIFE