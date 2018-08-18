'use strict';

(() => {
  // include dependencies
  const unit = require('unit.js');
  const toList = require('../toList');

  // describe #toList
  describe('#toList', () => {
    it('should be a function', () => {
      unit.function(toList);
    }); // end it

    it('should return a string  of value if only 1 value is provided', () => {
      unit
        .string(toList([1]))
        .is('1')
        .string(toList('hi'))
        .is('hi');
    }); // end it

    it('should return a comma seperated list with "and" as the last seperator when called with default options', () => {
      unit
        .string(toList([1, 2, 3]))
        .is('1, 2 and 3')
        .string(toList(['big', 'tall']))
        .is('big and tall');
    }); // end it

    it('should return a delimited list using provided options', () => {
      unit
        .string(toList([127, 0, 0, 1], {
          delimiter: '.',
          last: '.',
        }))
        .is('127.0.0.1')
        .string(toList([1, 0, 4, 'beta'], {
          delimiter: '.',
          last: '-',
        }))
        .is('1.0.4-beta');
    }); // end it
  }); // end describe #toList
})(); // end IIFE