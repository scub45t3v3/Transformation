'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:transformation:toRegExp');
const toString = require('./toString');
const REGEX = /^(?<seperator>[`~!@#$%^&*+=|\\?/])(?<pattern>.+)\1(?<flags>[gimuy]*)$/;

const toRegExp = (value) => {
  debug('call:toRegExp(%o)', value);
  if (value instanceof RegExp) {
    return value;
  }

  const {
    groups: {
      pattern,
      flags,
    } = {},
  } = REGEX.exec(toString(value)) || {};

  if (!pattern) {
    throw new TypeError(`${value} can not be transformed to a RegExp`);
  }

  return new RegExp(pattern, flags);
};

// export as commonjs module
module.exports = toRegExp;