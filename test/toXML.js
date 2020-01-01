'use strict';

/*
 * this is a direct passthrough to xml-js all tests should be preformed
 * on xml-js this is only included to test the passthrough is setup as
 * expected
 */
// include dependencies
const unit = require('unit.js');
const toXML = require('../toXML');

// describe #toXML
describe('#toXML', () => {
  it('should be a function', () => {
    unit
      .function(toXML);
  }); // end it

  it('should return an xml string for an object', () => {
    const test = {
      firstName: 'James',
      lastName: 'Bond',
      age: 55,
    };

    // eslint-disable-next-line prefer-named-capture-group
    const regex = /^\s*<(firstName)>James<\/\1>\s*<(lastName)>Bond<\/\2>\s*<(age)>55<\/\3>\s*$/mu;

    unit
      .string(toXML(test))
      .match(regex);
  }); // end it
}); // end describe #toXML