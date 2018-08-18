'use strict';

(() => {
  // Type
  exports.toBoolean = require('./toBoolean');
  exports.toNumber = require('./toNumber');
  exports.toString = require('./toString');
  exports.toRegExp = require('./toRegExp');

  // String format
  exports.toAscii = require('./toAscii');
  exports.toCamelCase = require('./toCamelCase');
  exports.toFormat = require('./toFormat');
  exports.toLines = require('./toLines');
  exports.toList = require('./toList');
  exports.toListSerial = require('./toListSerial');
  exports.toPascalCase = require('./toPascalCase');
  exports.toPlural = require('./toPlural');
  exports.toKebabCase = require('./toKebabCase');
  exports.toSingular = require('./toSingular');
  exports.toSlug = require('./toSlug');
  exports.toSnakeCase = require('./toSnakeCase');
  exports.toTokens = require('./toTokens');
  exports.toWords = require('./toWords');
  exports.toWrap = require('./toWrap');

  // Serialize
  exports.toCSV = require('./toCSV');
  exports.toJSON = require('./toJSON');
  exports.toXML = require('./toXML');
  exports.toYAML = require('./toYAML');
})(); // end IIFE