'use strict';

(() => {
  // include dependencies
  const unit = require('unit.js');
  const toString = require('../toString');

  // describe #toString
  describe('#toString', () => {
    it('should be a function', () => {
      unit
        .function(toString);
    }); // end it

    it('should return a string', () => {
      unit
        .string(toString([1, 2, 3]))
        .is('1,2,3')
        .string(toString({a: 5}))
        .is('[object Object]')
        .string(toString(Object.create(null)))
        .is('');
    }); // end it
  }); // end describe #toString
})(); // end IIFE