'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:transformation:toListSerial');
const toList = require('./toList');

const toListSerial = (value, opt = {}) => {
  debug('call:toListSerial(%o, %o)', value, opt);
  opt = Object.assign({
    delimiter: ', ',
    last: ' and ',
  }, opt);

  opt.last = `${opt.delimiter}${opt.last}`.replace(/\s+/u, ' ');

  return toList(value, opt);
}; // end toListSerial

// export as commonjs module
module.exports = toListSerial;