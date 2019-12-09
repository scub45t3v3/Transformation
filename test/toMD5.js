'use strict';

// include dependencies
const unit = require('unit.js');
const toMD5 = require('../toMD5');

// describe #toMD5
describe('#toMD5', () => {
  it('should be a function', () => {
    unit
      .function(toMD5);
  }); // end it

  it('should return a md5 encoded string for strings', () => {
    unit
      .string(toMD5('helloWorld'))
      .is('1a833da63a6b7e20098dae06d06602e1')
      .string(toMD5('person'))
      .is('8b0a44048f58988b486bdd0d245b22a8')
      .string(toMD5('scubaSquad'))
      .is('3c4c897839aa60f8e6707d8f82256792')
      .string(toMD5('json2Xml'))
      .is('0248141ff6553ede3ef2d63bc0f19661')
      .string(toMD5('json2XML'))
      .is('7857f71d5f286961ba7904fbe7bb8c74');
  }); // end it

  it('should return a md5 encoded string for arrays', () => {
    unit
      .string(toMD5([]))
      .is('d751713988987e9331980363e24189ce')
      .string(toMD5([1, 2, 3]))
      .is('f1e46f328e6decd56c64dd5e761dc2b7')
      .string(toMD5(['a', 'b', 'c']))
      .is('c29a5747d698b2f95cdfd5ed6502f19d')
      .string(toMD5([null, false, {}, [4]]))
      .is('505f1cc6122ee7a344b3edfd75e008cf');
  }); // end it

  it('should return a md5 encoded string for objects', () => {
    unit
      .string(toMD5({}))
      .is('99914b932bd37a50b983c5e7c90ae93b')
      .string(toMD5({a: 5}))
      .is('9b574798ab3bf7351f82eaf817c96d50')
      .string(toMD5(new Date('2000-01-01T00:00:00.000Z')))
      .is('8efbf608ff96f004ecd0f5383db444b4');
  }); // end it
}); // end describe #toMD5