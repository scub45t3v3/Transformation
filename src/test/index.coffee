unit = require 'unit.js'
index = require '../index'
FUNCTIONS = [
  'toAscii'
  'toBoolean'
  'toCamelCase'
  'toCSV'
  'toFormat'
  'toJSON'
  'toKebabCase'
  'toLines'
  'toList'
  'toListSerial'
  'toNumber'
  'toPascalCase'
  'toPlural'
  'toRegExp'
  'toSingular'
  'toSlug'
  'toSnakeCase'
  'toString'
  'toTokens'
  'toWords'
  'toWrap'
  'toXML'
  'toYAML'
]

describe '@scuba-squad/transformation', ->
  it 'should have several functions', ->
    unit
      .object index
      .hasProperties FUNCTIONS
      .matchEach (value, key) ->
        return typeof value == 'function' && /^to[A-Z]/.test(key)

    return null