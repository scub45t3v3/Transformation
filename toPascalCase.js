'use strict';

(() => {
  // include dependencies
  const toString = require('./toString');

  const toPascalCase = (value) => {
    return toString(value)
      .trim()
      .replace(/(?:\W|_)+/gm, '_')
      .replace(/^_+/, '')
      .replace(/_+$/, '')
      .replace(/_(.)/gm, (match, char) => {
        return char && char.toUpperCase();
      })
      .replace(/^[a-z]/, (match) => {
        return match && match.toUpperCase();
      });
  }; // end toPascalCase

  // export toPascalCase as commonjs module
  module.exports = toPascalCase;
})(); // end IIFE