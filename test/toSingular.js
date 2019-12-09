'use strict';

/*
 * this is a direct passthrough to pluralize all tests should be preformed on
 * pluralize this is only included to test the passthrough is setup as
 * expected
 */
// include dependencies
const unit = require('unit.js');
const toSingular = require('../toSingular');

describe('#toSingular', () => {
  it('should be a function', () => {
    unit
      .function(toSingular);
  }); // end it

  it('should return a singular version of a word', () => {
    unit
      .string(toSingular('tables'))
      .is('table')
      .string(toSingular('chairs'))
      .is('chair')
      .string(toSingular('cars'))
      .is('car')
      .string(toSingular('keys'))
      .is('key');
  }); // end it
}); // end describe #toSingular