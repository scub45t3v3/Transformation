'use strict';

(() => {
  // include dependencies
  const yaml = require('js-yaml');

  const toYAML = (value, opt = {}) => {
    return yaml.safeDump(value, opt);
  }; // end toYAML

  // export toYAML as commonjs module
  module.exports = toYAML;
})(); // end IIFE