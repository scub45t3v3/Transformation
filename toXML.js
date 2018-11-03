'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:transformation:toXML');
  const xml = require('xml-js');

  const toXML = (value, opt = {}) => {
    debug('call:toXML(%o, %o)', value, opt);
    opt = Object.assign({
      spaces: 2,
      compact: true,
      indentCdata: true,
    }, opt);

    return xml.json2xml(value, opt);
  }; // end toXML

  // export toXML as commonjs module
  module.exports = toXML;
})(); // end IIFE