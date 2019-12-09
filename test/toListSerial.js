'use strict';

// include dependencies
const unit = require('unit.js');
const toListSerial = require('../toListSerial');

describe('#toListSerial', () => {
  it('should be a function', () => {
    unit
      .function(toListSerial);
  }); // end it

  it('should return a string  of value if only 1 value is provided', () => {
    unit
      .string(toListSerial([1]))
      .is('1')
      .string(toListSerial('hi'))
      .is('hi');
  }); // end it

  it('should return a comma seperated list with "and" as the last seperator when called with default options', () => {
    unit
      .string(toListSerial([1, 2, 3]))
      .is('1, 2, and 3')
      .string(toListSerial(['big', 'tall']))
      .is('big, and tall');
  }); // end it

  it('should return a delimited list using provided options', () => {
    unit
      .string(toListSerial(['apples', 'oranges', 'bananas'], {
        delimiter: '; ',
      }))
      .is('apples; oranges; and bananas')
      .string(toListSerial(['alpha', 'beta', 'rc', 'release'], {
        delimiter: '-',
        last: '>',
      }))
      .is('alpha-beta-rc->release');
  }); // end it
}); // ed describe #toListSerial