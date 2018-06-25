(function() {
  var toSnakeCase, unit;

  unit = require('unit.js');

  toSnakeCase = require('../toSnakeCase');

  describe('#toSnakeCase', function() {
    it('should be a function', function() {
      unit.function(toSnakeCase);
      return null;
    });
    it('should return snake_case for snake_case strings', function() {
      unit.string(toSnakeCase('hello_world')).is('hello_world').string(toSnakeCase('_person')).is('_person').string(toSnakeCase('scuba_squad')).is('scuba_squad').string(toSnakeCase('json_2_xml')).is('json_2_xml').string(toSnakeCase('hello__world')).is('hello_world').string(toSnakeCase('_person_')).is('_person_').string(toSnakeCase('_scuba_squad_')).is('_scuba_squad_').string(toSnakeCase('json_2_XML')).is('json_2_xml').string(toSnakeCase('_Hello__World_')).is('_hello_world_').string(toSnakeCase('__Person__')).is('_person_').string(toSnakeCase('scuba______squad')).is('scuba_squad').string(toSnakeCase('JSON_2_XML')).is('json_2_xml');
      return null;
    });
    it('should return snake_case for kebab-case strings', function() {
      unit.string(toSnakeCase('hello-world')).is('hello_world').string(toSnakeCase('-person')).is('_person').string(toSnakeCase('scuba-squad')).is('scuba_squad').string(toSnakeCase('json-2-xml')).is('json_2_xml').string(toSnakeCase('hello--world')).is('hello_world').string(toSnakeCase('-person-')).is('_person_').string(toSnakeCase('-scuba-squad-')).is('_scuba_squad_').string(toSnakeCase('-json-2-xml')).is('_json_2_xml').string(toSnakeCase('-hello- -world-')).is('_hello_world_').string(toSnakeCase('-person- -')).is('_person_').string(toSnakeCase('scuba------squad')).is('scuba_squad').string(toSnakeCase('JSON-2-XML')).is('json_2_xml');
      return null;
    });
    it('should return snake_case for camelCase strings', function() {
      unit.string(toSnakeCase('helloWorld')).is('hello_world').string(toSnakeCase('person')).is('person').string(toSnakeCase('scubaSquad')).is('scuba_squad').string(toSnakeCase('json2Xml')).is('json2xml').string(toSnakeCase('json2XML')).is('json2xml');
      return null;
    });
    it('should return snake_case for PascalCase strings', function() {
      unit.string(toSnakeCase('HelloWorld')).is('hello_world').string(toSnakeCase('Person')).is('person').string(toSnakeCase('ScubaSquad')).is('scuba_squad').string(toSnakeCase('Json2Xml')).is('json2xml').string(toSnakeCase('Json2xml')).is('json2xml');
      return null;
    });
    it('should return snake_case for delimited strings', function() {
      unit.string(toSnakeCase('hello world')).is('hello_world').string(toSnakeCase('is,person')).is('is_person').string(toSnakeCase('@scuba_squad/transformation:toSnakeCase')).is('_scuba_squad_transformation_to_snake_case');
      return null;
    });
    return it('should return snake_case for arrays', function() {
      unit.string(toSnakeCase(['hello', 'world'])).is('hello_world').string(toSnakeCase(['-', 'person'])).is('_person').string(toSnakeCase(['scuba', 'squad'])).is('scuba_squad').string(toSnakeCase(['json', 2, 'xml'])).is('json_2_xml').string(toSnakeCase(['json', 2, 'XML'])).is('json_2_xml');
      return null;
    });
  });

}).call(this);
