'use strict';

// include dependencies
const unit = require('unit.js');
const toTokens = require('../toTokens');

// describe #toTokens
describe('#toTokens', () => {
  it('should be a function', () => {
    unit
      .function(toTokens);
  }); // end it

  it('should return an array of strings when given no options', () => {
    unit
      .array(toTokens('hello world!'))
      .is(['hello', 'world!'])
      .array(toTokens('123 Main St.'))
      .is(['123', 'Main', 'St.'])
      .array(toTokens('this is $1.00'))
      .is(['this', 'is', '$1.00'])
      .array(toTokens('a,b,c'))
      .is(['a,b,c'])
      .array(toTokens('fruit: apples, oranges, bananas'))
      .is(['fruit:', 'apples,', 'oranges,', 'bananas'])
      .array(toTokens('one'))
      .is(['one'])
      .array(toTokens(''))
      .is(['']);
  }); // end it

  it('should return an array of strings split on the provided token', () => {
    const token = /\W+/u;

    unit
      .array(toTokens('hello world!', token))
      .is(['hello', 'world', ''])
      .array(toTokens('123 Main St.', token))
      .is(['123', 'Main', 'St', ''])
      .array(toTokens('this is $1.00', token))
      .is(['this', 'is', '1', '00'])
      .array(toTokens('a,b,c', token))
      .is(['a', 'b', 'c'])
      .array(toTokens('fruit: apples, oranges, bananas', token))
      .is(['fruit', 'apples', 'oranges', 'bananas'])
      .array(toTokens('one', token))
      .is(['one'])
      .array(toTokens('', token))
      .is(['']);
  }); // end it
}); // end describe #toTokens