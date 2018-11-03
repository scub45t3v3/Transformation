'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:transformation:toWrap');
  const toString = require('./toString');

  const toWrap = (value, opt = {}) => {
    debug('call:toWrap(%o, %o)', value, opt);
    value = toString(value);
    opt.start = toString(opt.start) || toString(opt.end);
    opt.end = toString(opt.end) || opt.start;

    return `${opt.start}${value}${opt.end}`;
  }; // end toWrap

  // export toWrap as commonjs module
  module.exports = toWrap;
})(); // end IIFE