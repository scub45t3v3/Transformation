unit = require 'unit.js'
toCamelCase = require '../toCamelCase'

describe '#toCamelCase', ->
  it 'should be a function', ->
    unit
      .function toCamelCase

    return null

  it 'should return camelCase for camelCase strings', ->
    unit
      .string toCamelCase('helloWorld')
      .is 'helloWorld'
      .string toCamelCase('person')
      .is 'person'
      .string toCamelCase('scubaSquad')
      .is 'scubaSquad'
      .string toCamelCase('json2Xml')
      .is 'json2Xml'
      .string toCamelCase('json2XML')
      .is 'json2XML'

    return null

  it 'should return camelCase for PascalCase strings', ->
    unit
      .string toCamelCase('HelloWorld')
      .is 'helloWorld'
      .string toCamelCase('Person')
      .is 'person'
      .string toCamelCase('ScubaSquad')
      .is 'scubaSquad'
      .string toCamelCase('Json2Xml')
      .is 'json2Xml'
      .string toCamelCase('Json2xml')
      .is 'json2xml'

    return null

  it 'should return camelCase for snake_case strings', ->
    unit
      .string toCamelCase('hello_world')
      .is 'helloWorld'
      .string toCamelCase('_person')
      .is 'person'
      .string toCamelCase('scuba_squad')
      .is 'scubaSquad'
      .string toCamelCase('json_2_xml')
      .is 'json2Xml'
      .string toCamelCase('hello__world')
      .is 'helloWorld'
      .string toCamelCase('_person_')
      .is 'person'
      .string toCamelCase('_scuba_squad_')
      .is 'scubaSquad'
      .string toCamelCase('json_2_XML')
      .is 'json2XML'
      .string toCamelCase('_Hello__World_')
      .is 'helloWorld'
      .string toCamelCase('__Person__')
      .is 'person'
      .string toCamelCase('scuba______squad')
      .is 'scubaSquad'
      .string toCamelCase('JSON_2_XML')
      .is 'jSON2XML'

    return null

  it 'should return camelCase for kebab-case strings', ->
    unit
      .string toCamelCase('hello-world')
      .is 'helloWorld'
      .string toCamelCase('-person')
      .is 'person'
      .string toCamelCase('scuba-squad')
      .is 'scubaSquad'
      .string toCamelCase('json-2-xml')
      .is 'json2Xml'
      .string toCamelCase('hello--world')
      .is 'helloWorld'
      .string toCamelCase('-person-')
      .is 'person'
      .string toCamelCase('-scuba-squad-')
      .is 'scubaSquad'
      .string toCamelCase('-json-2-xml')
      .is 'json2Xml'
      .string toCamelCase('-hello- -world-')
      .is 'helloWorld'
      .string toCamelCase('-person- -')
      .is 'person'
      .string toCamelCase('scuba------squad')
      .is 'scubaSquad'
      .string toCamelCase('JSON-2-XML')
      .is 'jSON2XML'

    return null

  it 'should return camelCase for delimited strings', ->
    unit
      .string toCamelCase('hello world')
      .is 'helloWorld'
      .string toCamelCase('is,person')
      .is 'isPerson'
      .string toCamelCase('@scuba-squad/transformation:toCamelCase')
      .is 'scubaSquadTransformationToCamelCase'

    return null

  it 'should return camelCase for arrays', ->
    unit
      .string toCamelCase(['hello', 'world'])
      .is 'helloWorld'
      .string toCamelCase(['-', 'person'])
      .is 'person'
      .string toCamelCase(['scuba', 'squad'])
      .is 'scubaSquad'
      .string toCamelCase(['json', 2, 'xml'])
      .is 'json2Xml'
      .string toCamelCase(['json', 2, 'XML'])
      .is 'json2XML'

    return null