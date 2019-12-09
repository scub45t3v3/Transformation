'use strict';

// include dependencies
const unit = require('unit.js');
const toNumber = require('../toNumber');

// describe #toNumber
describe('#toNumber', () => {
  it('should be a function', () => {
    unit.function(toNumber);
  }); // end it

  it('should return a number for numbers', () => {
    unit
      .number(toNumber(1))
      .is(1)
      .number(toNumber(9.9))
      .is(9.9)
      .number(toNumber(-3.16))
      .is(-3.16)
      .number(toNumber(Number.MAX_VALUE))
      .is(Number.MAX_VALUE)
      .number(toNumber(Number.MIN_VALUE))
      .is(Number.MIN_VALUE);
  }); // end it

  it('should return a number for booleans', () => {
    unit
      .number(toNumber(true))
      .is(1)
      .number(toNumber(false))
      .is(0)
      .number(toNumber(new Boolean(1)))
      .is(1)
      .number(toNumber(new Boolean()))
      .is(0);
  }); // end it

  it('should return a number for date objects', () => {
    unit
      .number(toNumber(new Date()))
      .isBetween(Date.now() - 500, Date.now() + 500)
      .number(toNumber(new Date(500)))
      .is(500);
  }); // end it

  it('should return a number for parsable strings', () => {
    unit
      .number(toNumber('1'))
      .is(1)
      .number(toNumber('9.9'))
      .is(9.9)
      .number(toNumber('-3.16'))
      .is(-3.16)
      .number(toNumber(new String('3.16')))
      .is(3.16);
  }); // end it

  it('should return a number for empty arrays or arrays with only 1 numberic element', () => {
    unit
      .number(toNumber([]))
      .is(0)
      .number(toNumber([1]))
      .is(1)
      .number(toNumber(new Array('-7')))
      .is(-7)
      .number(toNumber(['5']))
      .is(5);
  }); // end it

  it('should return NaN for NaN', () => {
    unit
      .number(toNumber(0 / 0))
      .isNaN();
  }); // end it

  it('should return Infinity for Infinity', () => {
    unit
      .number(toNumber(2e308))
      .isInfinite()
      .number(toNumber(-2e308))
      .isInfinite();
  }); // end it

  it('should return NaN for unparsable strings', () => {
    unit.number(toNumber('asd')).isNaN()
      .number(toNumber('34d'))
      .isNaN()
      .number(toNumber('9.9.3'))
      .isNaN()
      .number(toNumber('-5+6'))
      .isNaN();
  }); // end it

  it('should return NaN for arrays with more than 1 element or unparsable', () => {
    unit
      .number(toNumber([1, 2]))
      .isNaN()
      .number(toNumber(['a']))
      .isNaN()
      .number(toNumber([[4], 7]))
      .isNaN()
      .number(toNumber(new Array('5', 'g')))
      .isNaN();
  }); // end it

  it('should return NaN for objects that can not be converted', () => {
    unit
      .number(toNumber({}))
      .isNaN()
      .number(toNumber({
        a: 5,
      }))
      .isNaN();
  }); // end it
}); // end describe #toNumber