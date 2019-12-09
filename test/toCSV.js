'use strict';

/*
 * this is a direct passthrough to json2csv all tests should be preformed on
 * json2csv this is only included to test the passthrough is setup as expected
 */
// include dependencies
const unit = require('unit.js');
const toCSV = require('../toCSV');

describe('#toCSV', () => {
  it('should be a function', () => {
    unit
      .function(toCSV);
  }); // end it

  it('should return a csv string for an object', () => {
    const test = {
      firstName: 'James',
      lastName: 'Bond',
      age: 55,
    };

    const regex = /^\s*"firstName"\s*,\s*"lastName"\s*,\s*"age"\s*"James"\s*,\s*"Bond"\s*,\s*55\s*$/m;

    unit
      .string(toCSV(test))
      .match(regex);
  }); // end it
}); // end describe #toCSV