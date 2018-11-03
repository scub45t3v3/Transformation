'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:transformation:toRegExp');
  const toString = require('./toString');
  const REGEX = /^([`~!@#$%^&*+=|\\?/])(.+)\1([gimuy]*)$/;

  const toRegExp = (value) => {
    debug('call:toRegExp(%o)', value);

    if (value instanceof RegExp) {
      return value;
    }

    const match = toString(value).match(REGEX);

    if (!(match && match[2])) {
      throw new TypeError(`${value} can not be transformed to a RegExp`);
    }

    return new RegExp(match[2], match[3]);
  };

  // export toRegExp as commonjs module
  module.exports = toRegExp;
})(); // end IIFE