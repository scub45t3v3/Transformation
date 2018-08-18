'use strict';

(() => {
  // include dependencies
  const unit = require('unit.js');
  const toRegExp = require('../toRegExp');

  // describe #toRegExp
  describe('#toRegExp', () => {
    it('should be a function', () => {
      unit.function(toRegExp);
    }); // end it

    it('should return a RegExp when given a RegExp object', () => {
      unit
        .regexp(toRegExp(/asd/i))
        .is(/asd/i)
        .regexp(toRegExp(new RegExp('^hello', 'i')))
        .is(/^hello/i)
        .regexp(toRegExp(/^\d+$/))
        .is(/^\d+$/);
    }); // end it

    it('should return a RegExp object when given a serialized pcre string', () => {
      unit
        .regexp(toRegExp('/asd/i'))
        .is(/asd/i)
        .regexp(toRegExp('%^hello%i'))
        .is(/^hello/i)
        .regexp(toRegExp('|\\d+|g'))
        .is(/\d+/g);
    }); // end it

    it('should throw an error when given a non-serilized pcre string', () => {
      unit
        .error(() => {
          toRegExp('hello');
        })
        .error(() => {
          toRegExp('/asd|i');
        })
        .error(() => {
          toRegExp('/asd/t');
        });
    }); // end it
  }); // end describe #toRegExp
})(); // end IIFE