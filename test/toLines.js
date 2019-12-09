'use strict';

// include dependencies
const unit = require('unit.js');
const toLines = require('../toLines');

// describe #toLines
describe('#toLines', () => {
  it('should be a function', () => {
    unit
      .function(toLines);
  }); // end it

  it('should return an array with the string for strings without CRLF|CR|LF', () => {
    unit
      .array(toLines('123'))
      .is(['123'])
      .array(toLines('asd'))
      .is(['asd']);
  }); // end it

  it('should return an array with a default joined string for arrays without CRLF|CR|LF', () => {
    unit
      .array(toLines(['a', 'b', 'c']))
      .is(['a,b,c']);
  }); // end it

  it('should return an array of lines for strings with CRLF|CR|LF', () => {
    unit
      .array(toLines('a\nb\nc'))
      .is(['a', 'b', 'c'])
      .array(toLines('\n\r\n\n1\r\n\r2'))
      .is([
        '',
        '',
        '',
        '1',
        '',
        '2',
      ]);
  }); // end it

  it('should return an array of lines for arrays with CRLF|CR|LF', () => {
    unit
      .array(toLines(['\na\r\n', '\r5\n']))
      .is([
        '',
        'a',
        ',',
        '5',
        '',
      ]);
  }); // end it
}); // end describe #toLines