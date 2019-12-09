'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:transformation:toSingular');
const {singular} = require('pluralize');

const toSingular = (value) => {
  debug('call:toSingular(%o)', value);

  return singular(value);
}; // end toSingular

// export as commonjs module
module.exports = toSingular;