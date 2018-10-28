'use strict';

(() => {
  // include dependencies
  const unit = require('unit.js');
  const index = require('../index');
  const FUNCTIONS = [
    'toArray',
    'toAscii',
    'toBase64',
    'toBoolean',
    'toCamelCase',
    'toCSV',
    'toFormat',
    'toJSON',
    'toKebabCase',
    'toLines',
    'toList',
    'toListSerial',
    'toMD5',
    'toNumber',
    'toPascalCase',
    'toPlural',
    'toRegExp',
    'toSingular',
    'toSlug',
    'toSnakeCase',
    'toString',
    'toTokens',
    'toWords',
    'toWrap',
    'toXML',
    'toYAML',
  ];

  // describe @scuba-squad/transformation
  describe('@scuba-squad/transformation', () => {
    it('should have several functions', () => {
      unit
        .object(index)
        .hasProperties(FUNCTIONS)
        .matchEach((value, key) => {
          return typeof value === 'function' && /^to[A-Z]/.test(key);
        });
    }); // end it
  }); // end describe @scuba-squad/transformation
})(); // end IIFE