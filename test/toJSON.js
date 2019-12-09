'use strict';

/*
 * this is a direct passthrough to JSON.stringify all tests should be
 * preformed on JSON.stringify this is only included to test the passthrough
 * is setup as expected
 */
// include dependencies
const unit = require('unit.js');
const toJSON = require('../toJSON');

describe('#toJSON', () => {
  it('should be a function', () => {
    unit
      .function(toJSON);
  }); // end it

  it('should return a json string for an object', () => {
    const test = {
      firstName: 'James',
      lastName: 'Bond',
      age: 55,
    };

    const regex = /^\s*{\s*"firstName"\s*:\s*"James"\s*,\s*"lastName"\s*:\s*"Bond"\s*,\s*"age"\s*:\s*55\s*}\s*$/m;

    unit
      .string(toJSON(test))
      .match(regex);
  }); // end it
}); // end describe #toJSON