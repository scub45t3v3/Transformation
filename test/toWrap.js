'use strict';

(() => {
  // include dependencies
  const unit = require('unit.js');
  const toWrap = require('../toWrap');

  // describe #toWrap
  describe('#toWrap', () => {
    it('should be a function', () => {
      unit
        .function(toWrap);
    }); // end it

    it('should return a string of value when no options are provided', () => {
      unit
        .string(toWrap('hello'))
        .is('hello')
        .string(toWrap(/asd/i))
        .is('/asd/i')
        .string(toWrap(Symbol('no')))
        .is('Symbol(no)');
    }); // end it

    it('should return a string enclosing value with provided options', () => {
      unit
        .string(toWrap('hello', {
          start: '"',
          end: '?"',
        }))
        .is('"hello?"')
        .string(toWrap('tag', {
          start: '<',
          end: '>',
        }))
        .is('<tag>')
        .string(toWrap('find me', {
          start: '/',
          end: '/i',
        }))
        .is('/find me/i')
        .string(toWrap([1, 2, 3], {
          start: '[',
          end: ']',
        }))
        .is('[1,2,3]')
        .string(toWrap([1, 2, 3], {
          start: '(',
          end: ')',
        }))
        .is('(1,2,3)');
    }); // end it

    it('should return a string enclosing value with option provided when only 1 is set', () => {
      unit
        .string(toWrap('hello', {
          start: '"',
        }))
        .is('"hello"')
        .string(toWrap('hello', {
          end: '/',
        }))
        .is('/hello/')
        .string(toWrap(true, {
          start: '-',
        }))
        .is('-true-')
        .string(toWrap('italics', {
          end: '*',
        }))
        .is('*italics*');
    }); // end it
  }); // end describe #toWrap
})(); // end IIFE