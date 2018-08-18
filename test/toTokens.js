'use strict';

(() => {
  // include dependencies
  const unit = require('unit.js');
  const toTokens = require('../toTokens');

  // describe #toTokens
  describe('#toTokens', () => {
    it('should be a function', () => {
      unit
        .function(toTokens);
    }); // end it
  }); // end describe #toTokens
})(); // end IIFE