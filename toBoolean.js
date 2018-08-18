'use strict';

(() => {
  // include dependencies
  const toString = require('./toString');
  const REGEX = /^(?:0+|-|null|undefined|NaN|off|f(?:alse)?|no(?:ne)?|neg(?:ative)?|)$/i;

  const toBoolean = (value) => {
    return !!value && !REGEX.test(toString(value).trim());
  };

  // export toBoolean as commonjs module
  module.exports = toBoolean;
})(); // end IIFE