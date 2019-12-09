'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:transformation:toJSON');

const toJSON = (value, space = 2) => {
  debug('call:toJSON(%o, %o)', value, space);

  return JSON.stringify(value, null, space);
};

// export as commonjs module
module.exports = toJSON;