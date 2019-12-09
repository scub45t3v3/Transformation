'use strict';

// include dependencies
const unit = require('unit.js');
const toSlug = require('../toSlug');

// describe #toSlug
describe('#toSlug', () => {
  it('should be a function', () => {
    unit
      .function(toSlug);
  }); // end it

  it('should return a slug when given a string', () => {
    unit
      .string(toSlug('hello world'))
      .is('hello-world')
      .string(toSlug('helloWorld'))
      .is('hello-World')
      .string(toSlug('＄ vs €'))
      .is('dollar-vs-euro');
  }); // end it

  it('should return a slug when given an array', () => {
    unit
      .string(toSlug(['hello', 'world']))
      .is('hello-world')
      .string(toSlug(['＄', 'vs', '€']))
      .is('dollar-vs-euro');
  }); // end it
}); // end describe #toSlug