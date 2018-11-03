'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:transformation:toYAML');
  const yaml = require('js-yaml');

  const toYAML = (value, opt = {}) => {
    debug('call:toYAML(%o, %o)', value, opt);
    opt = Object.assign({
      skipInvalid: true,
    }, opt);

    return yaml.safeDump(value, opt);
  }; // end toYAML

  // export toYAML as commonjs module
  module.exports = toYAML;
})(); // end IIFE