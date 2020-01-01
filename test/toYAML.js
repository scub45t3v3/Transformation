'use strict';

/*
 * this is a direct passthrough to js-yaml all tests should be preformed
 * on js-yaml this is only included to test the passthrough is setup as
 * expected
 */
(() => {
  // include dependencies
  const unit = require('unit.js');
  const toYAML = require('../toYAML');

  // describe #toYAML
  describe('#toYAML', () => {
    it('should be a function', () => {
      unit
        .function(toYAML);
    }); // end it

    it('should return a yaml string for an object', () => {
      const test = {
        firstName: 'James',
        lastName: 'Bond',
        age: 55,
      };

      const regex = /^\s*firstName\s*:\s*James\s*\s*lastName\s*:\s*Bond\s*\s*age\s*:\s*55\s*$/mu;

      unit
        .string(toYAML(test))
        .match(regex);
    }); // end it
  }); // end describe #toYAML
})(); // end IIFE