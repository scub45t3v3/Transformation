'use strict';

// include dependencies
const unit = require('unit.js');
const toBase64 = require('../toBase64');

// describe #toBase64
describe('#toBase64', () => {
  it('should be a function', () => {
    unit
      .function(toBase64);
  }); // end it

  it('should return a base64 encoded string for strings', () => {
    unit
      .string(toBase64('helloWorld'))
      .is('aGVsbG9Xb3JsZA==')
      .string(toBase64('person'))
      .is('cGVyc29u')
      .string(toBase64('scubaSquad'))
      .is('c2N1YmFTcXVhZA==')
      .string(toBase64('json2Xml'))
      .is('anNvbjJYbWw=')
      .string(toBase64('json2XML'))
      .is('anNvbjJYTUw=');
  }); // end it

  it('should return a base64 encoded string for arrays', () => {
    unit
      .string(toBase64([]))
      .is('W10=')
      .string(toBase64([1, 2, 3]))
      .is('WzEsMiwzXQ==')
      .string(toBase64(['a', 'b', 'c']))
      .is('WyJhIiwiYiIsImMiXQ==')
      .string(toBase64([null, false, {}, [4]]))
      .is('W251bGwsZmFsc2Use30sWzRdXQ==');
  }); // end it

  it('should return a base64 encoded string for objects', () => {
    unit
      .string(toBase64({}))
      .is('e30=')
      .string(toBase64({a: 5}))
      .is('eyJhIjo1fQ==')
      .string(toBase64(new Date('2000-01-01T00:00:00.000Z')))
      .is('IjIwMDAtMDEtMDFUMDA6MDA6MDAuMDAwWiI=');
  }); // end it
}); // end describe #toBase64