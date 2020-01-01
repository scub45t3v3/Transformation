'use strict';

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
      .regexp(toRegExp(/asd/iu))
      .is(/asd/iu)
      .regexp(toRegExp(new RegExp('^hello', 'iu'))) // eslint-disable-line prefer-regex-literals
      .is(/^hello/iu)
      .regexp(toRegExp(/^\d+$/u))
      .is(/^\d+$/u);
  }); // end it

  it('should return a RegExp object when given a serialized pcre string', () => {
    unit
      .regexp(toRegExp('/asd/iu'))
      .is(/asd/iu)
      .regexp(toRegExp('%^hello%iu'))
      .is(/^hello/iu)
      .regexp(toRegExp('|\\d+|gu'))
      .is(/\d+/gu);
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