'use strict';

// include dependencies
const unit = require('unit.js');
const toKebabCase = require('../toKebabCase');

describe('#toKebabCase', () => {
  it('should be a function', () => {
    unit
      .function(toKebabCase);
  }); // end it

  it('should return kebab-case for kebab-case strings', () => {
    unit
      .string(toKebabCase('hello-world'))
      .is('hello-world')
      .string(toKebabCase('-person'))
      .is('-person')
      .string(toKebabCase('scuba-squad'))
      .is('scuba-squad')
      .string(toKebabCase('json-2-xml'))
      .is('json-2-xml')
      .string(toKebabCase('hello--world'))
      .is('hello-world')
      .string(toKebabCase('-person-'))
      .is('-person-')
      .string(toKebabCase('-scuba-squad-'))
      .is('-scuba-squad-')
      .string(toKebabCase('-json-2-xml'))
      .is('-json-2-xml')
      .string(toKebabCase('-hello- -world-'))
      .is('-hello-world-')
      .string(toKebabCase('-person- -'))
      .is('-person-')
      .string(toKebabCase('scuba------squad'))
      .is('scuba-squad')
      .string(toKebabCase('JSON-2-XML'))
      .is('json-2-xml');
  }); // end it

  it('should return kebab-case for camelCase strings', () => {
    unit
      .string(toKebabCase('helloWorld'))
      .is('hello-world')
      .string(toKebabCase('person'))
      .is('person')
      .string(toKebabCase('scubaSquad'))
      .is('scuba-squad')
      .string(toKebabCase('json2Xml'))
      .is('json2xml')
      .string(toKebabCase('json2XML'))
      .is('json2xml');
  }); // end it

  it('should return kebab-case for PascalCase strings', () => {
    unit
      .string(toKebabCase('HelloWorld'))
      .is('hello-world')
      .string(toKebabCase('Person'))
      .is('person')
      .string(toKebabCase('ScubaSquad'))
      .is('scuba-squad')
      .string(toKebabCase('Json2Xml'))
      .is('json2xml')
      .string(toKebabCase('Json2xml'))
      .is('json2xml');
  }); // end it

  it('should return kebab-case for snake_case strings', () => {
    unit
      .string(toKebabCase('hello_world'))
      .is('hello-world')
      .string(toKebabCase('_person'))
      .is('-person')
      .string(toKebabCase('scuba_squad'))
      .is('scuba-squad')
      .string(toKebabCase('json_2_xml'))
      .is('json-2-xml')
      .string(toKebabCase('hello__world'))
      .is('hello-world')
      .string(toKebabCase('_person_'))
      .is('-person-')
      .string(toKebabCase('_scuba_squad_'))
      .is('-scuba-squad-')
      .string(toKebabCase('json_2_XML'))
      .is('json-2-xml')
      .string(toKebabCase('_Hello__World_'))
      .is('-hello-world-')
      .string(toKebabCase('__Person__'))
      .is('-person-')
      .string(toKebabCase('scuba______squad'))
      .is('scuba-squad')
      .string(toKebabCase('JSON_2_XML'))
      .is('json-2-xml');
  }); // end it

  it('should return kebab-case for delimited strings', () => {
    unit
      .string(toKebabCase('hello world'))
      .is('hello-world')
      .string(toKebabCase('is,person'))
      .is('is-person')
      .string(toKebabCase('@scuba-squad/transformation:toKebabCase'))
      .is('-scuba-squad-transformation-to-kebab-case');
  }); // end it

  it('should return kebab-case for arrays', () => {
    unit
      .string(toKebabCase(['hello', 'world']))
      .is('hello-world')
      .string(toKebabCase(['-', 'person']))
      .is('-person')
      .string(toKebabCase(['scuba', 'squad']))
      .is('scuba-squad')
      .string(toKebabCase(['json', 2, 'xml']))
      .is('json-2-xml')
      .string(toKebabCase(['json', 2, 'XML']))
      .is('json-2-xml');
  }); // end it
}); // end describe #toKebabCase