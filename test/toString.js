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
  }); // end describe #toString
})(); // end IIFE