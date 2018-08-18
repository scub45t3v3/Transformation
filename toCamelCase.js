'use strict';

(() => {
  // include dependencies
  const toString = require('./toString');

  const toCamelCase = (value) => {
    return toString(value)
      .trim()
      .replace(/(?:\W|_)+/gm, '_')
      .replace(/^_+/, '')
      .replace(/_+$/, '')
      .replace(/_(.)/gm, (match, char) => {
        return char && char.toUpperCase();
      })
      .replace(/^[A-Z]/, (match) => {
        return match && match.toLowerCase();
      });
  }; // end toCamelCase

  // export toCamelCase as commonjs module
  module.exports = toCamelCase;
})(); // end IIFE