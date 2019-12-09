'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:transformation:toCSV');
const {parse} = require('json2csv');

const toCSV = (value, opt = {}) => {
  debug('call:toCSV(%o, %o)', value, opt);

  return parse(value, opt);
};

// export as commonjs module
module.exports = toCSV;