'use strict';

// include dependencies
const unit = require('unit.js');
const toWords = require('../toWords');

// describe #toWords
describe('#toWords', () => {
  it('should be a function', () => {
    unit
      .function(toWords);
  }); // end it

  it('should return an array of words in a string', () => {
    unit
      .array(toWords('hello world!'))
      .is(['hello', 'world!'])
      .array(toWords('123 Main St.'))
      .is(['123', 'Main', 'St.'])
      .array(toWords('this is $1.00'))
      .is(['this', 'is', '$1.00'])
      .array(toWords('a,b,c'))
      .is(['a', 'b', 'c'])
      .array(toWords('fruit: apples, oranges, bananas'))
      .is(['fruit', 'apples', 'oranges', 'bananas'])
      .array(toWords('one'))
      .is(['one'])
      .array(toWords(''))
      .is(['']);
  }); // end it
}); // end describe #toWords