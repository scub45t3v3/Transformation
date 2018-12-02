'use strict';

(() => {
  // include dependencies
  const unit = require('unit.js');
  const toBoolean = require('../toBoolean');

  // describe #toBoolean
  describe('#toBoolean', () => {
    it('should retun true for true booleans', () => {
      unit
        .bool(toBoolean(true))
        .isTrue()
        .bool(toBoolean(new Boolean(1)))
        .isTrue();
    }); // end it

    it('should return true for non falsey strings', () => {
      unit
        .bool(toBoolean('true'))
        .isTrue()
        .bool(toBoolean('1'))
        .isTrue()
        .bool(toBoolean('a'))
        .isTrue()
        .bool(toBoolean('hello'))
        .isTrue()
        .bool(toBoolean('  hi   '))
        .isTrue()
        .bool(toBoolean('+'))
        .isTrue();
    }); // end it

    it('should return true for numbers != 0', () => {
      unit
        .bool(toBoolean(1))
        .isTrue()
        .bool(toBoolean(-1))
        .isTrue()
        .bool(toBoolean(Number.MAX_VALUE))
        .isTrue()
        .bool(toBoolean(Number.MIN_VALUE))
        .isTrue();
    }); // end it

    it('should return true for Infinity', () => {
      unit
        .bool(toBoolean(2e308))
        .isTrue()
        .bool(toBoolean(-2e308))
        .isTrue();
    }); // end it

    it('should return true for arrays that don\'t stringify to falsy strings', () => {
      unit
        .bool(toBoolean([1, 2]))
        .isTrue()
        .bool(toBoolean(['a']))
        .isTrue()
        .bool(toBoolean([0, 0, 3]))
        .isTrue();
    }); // end it

    it('should return true for objects that don\'t stringify to fasly strings', () => {
      unit
        .bool(toBoolean({}))
        .isTrue()
        .bool(toBoolean({
          a: 5,
        }))
        .isTrue()
        .bool(toBoolean(new Set([1, 2])))
        .isTrue()
        .bool(toBoolean(new String(':')))
        .isTrue()
        .bool(toBoolean(new Date()))
        .isTrue()
        .bool(toBoolean(new Array(1, 2)))
        .isTrue()
        .bool(toBoolean(new RegExp()))
        .isTrue();
    }); // end it

    it('should return false for false booleans', () => {
      unit
        .bool(toBoolean(false))
        .isFalse()
        .bool(toBoolean(new Boolean(0)))
        .isFalse();
    }); // end it

    it('should return false for falsy strings', () => {
      unit
        .bool(toBoolean(''))
        .isFalse()
        .bool(toBoolean('     '))
        .isFalse()
        .bool(toBoolean('\n'))
        .isFalse()
        .bool(toBoolean('\r'))
        .isFalse()
        .bool(toBoolean('\v'))
        .isFalse()
        .bool(toBoolean('0'))
        .isFalse()
        .bool(toBoolean('false'))
        .isFalse()
        .bool(toBoolean('f'))
        .isFalse()
        .bool(toBoolean('off'))
        .isFalse()
        .bool(toBoolean('no'))
        .isFalse()
        .bool(toBoolean('none'))
        .isFalse()
        .bool(toBoolean('neg'))
        .isFalse()
        .bool(toBoolean('negative'))
        .isFalse()
        .bool(toBoolean('-'))
        .isFalse();
    }); // end it

    it('should return false for 0', () => {
      unit
        .bool(toBoolean(0))
        .isFalse();
    }); // end it

    it('should return false for arrays that stringify to falsy strings', () => {
      unit
        .bool(toBoolean([]))
        .isFalse()
        .bool(toBoolean([0]))
        .isFalse()
        .bool(toBoolean([false]))
        .isFalse()
        .bool(toBoolean(['NO']))
        .isFalse();
    }); // end it

    it('should return false for NaN', () => {
      unit
        .bool(toBoolean(0 / 0))
        .isFalse();
    }); // end it

    it('should return false for null', () => {
      unit
        .bool(toBoolean(null))
        .isFalse();
    }); // end it

    it('should return false for undefined', () => {
      unit
        .bool(toBoolean())
        .isFalse()
        .bool(toBoolean(undefined))
        .isFalse();
    }); // end it
  }); // end describe #toBoolean
})(); // end IIFE