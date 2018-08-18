'use strict';

(() => {
  // include dependencies
  const unit = require('unit.js');
  const toPascalCase = require('../toPascalCase');

  // describe #toPascalCase
  describe('#toPascalCase', () => {
    it('should be a function', () => {
      unit
        .function(toPascalCase);
    }); // end it

    it('should return PascalCase for PascalCase strings', () => {
      unit
        .string(toPascalCase('HelloWorld'))
        .is('HelloWorld')
        .string(toPascalCase('Person'))
        .is('Person')
        .string(toPascalCase('ScubaSquad'))
        .is('ScubaSquad')
        .string(toPascalCase('Json2Xml'))
        .is('Json2Xml')
        .string(toPascalCase('Json2xml'))
        .is('Json2xml');
    }); // end it

    it('should return PascalCase for camelCase strings', () => {
      unit
        .string(toPascalCase('helloWorld'))
        .is('HelloWorld')
        .string(toPascalCase('person'))
        .is('Person')
        .string(toPascalCase('scubaSquad'))
        .is('ScubaSquad')
        .string(toPascalCase('json2Xml'))
        .is('Json2Xml')
        .string(toPascalCase('json2XML'))
        .is('Json2XML');
    }); // end it

    it('should return PascalCase for snake_case strings', () => {
      unit
        .string(toPascalCase('hello_world'))
        .is('HelloWorld')
        .string(toPascalCase('_person'))
        .is('Person')
        .string(toPascalCase('scuba_squad'))
        .is('ScubaSquad')
        .string(toPascalCase('json_2_xml'))
        .is('Json2Xml')
        .string(toPascalCase('hello__world'))
        .is('HelloWorld')
        .string(toPascalCase('_person_'))
        .is('Person')
        .string(toPascalCase('_scuba_squad_'))
        .is('ScubaSquad')
        .string(toPascalCase('json_2_XML'))
        .is('Json2XML')
        .string(toPascalCase('_Hello__World_'))
        .is('HelloWorld')
        .string(toPascalCase('__Person__'))
        .is('Person')
        .string(toPascalCase('scuba______squad'))
        .is('ScubaSquad')
        .string(toPascalCase('JSON_2_XML'))
        .is('JSON2XML');
    }); // end it

    it('should return PascalCase for kebab-case strings', () => {
      unit
        .string(toPascalCase('hello-world'))
        .is('HelloWorld')
        .string(toPascalCase('-person'))
        .is('Person')
        .string(toPascalCase('scuba-squad'))
        .is('ScubaSquad')
        .string(toPascalCase('json-2-xml'))
        .is('Json2Xml')
        .string(toPascalCase('hello--world'))
        .is('HelloWorld')
        .string(toPascalCase('-person-'))
        .is('Person')
        .string(toPascalCase('-scuba-squad-'))
        .is('ScubaSquad')
        .string(toPascalCase('-json-2-xml'))
        .is('Json2Xml')
        .string(toPascalCase('-hello- -world-'))
        .is('HelloWorld')
        .string(toPascalCase('-person- -'))
        .is('Person')
        .string(toPascalCase('scuba------squad'))
        .is('ScubaSquad')
        .string(toPascalCase('JSON-2-XML'))
        .is('JSON2XML');
    }); // end it

    it('should return PascalCase for delimited strings', () => {
      unit
        .string(toPascalCase('hello world'))
        .is('HelloWorld')
        .string(toPascalCase('is,person'))
        .is('IsPerson')
        .string(toPascalCase('@scuba-squad/transformation:toPascalCase'))
        .is('ScubaSquadTransformationToPascalCase');
    }); // end it

    it('should return PascalCase for arrays', () => {
      unit
        .string(toPascalCase(['hello', 'world']))
        .is('HelloWorld')
        .string(toPascalCase(['-', 'person']))
        .is('Person')
        .string(toPascalCase(['scuba', 'squad']))
        .is('ScubaSquad')
        .string(toPascalCase(['json', 2, 'xml']))
        .is('Json2Xml')
        .string(toPascalCase(['json', 2, 'XML']))
        .is('Json2XML');
    }); // end it
  }); // end describe #toPascalCase
})(); // end IIFE