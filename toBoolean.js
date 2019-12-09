'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:transformation:toBoolean');
const toString = require('./toString');
const REGEX = /^(?:0+|-|null|undefined|NaN|off|f(?:alse)?|no(?:ne)?|neg(?:ative)?|)$/i;

const toBoolean = (value) => {
  debug('call:toBoolean(%o)', value);

  return !!value && !REGEX.test(toString(value).trim());
};

// export as commonjs module
module.exports = toBoolean;