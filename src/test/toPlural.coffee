###
# this is a direct passthrough to pluralize all tests should be preformed on
# pluralize this is only included to test the passthrough is setup as expected
###
unit = require 'unit.js'
toPlural = require '../toPlural'

describe '#toPlural', ->
  it 'should be a function', ->
    unit
      .function toPlural

    return null

  it 'should return a plural version of a word', ->
    unit
      .string toPlural('table')
      .is 'tables'
      .string toPlural('chair')
      .is 'chairs'
      .string toPlural('car')
      .is 'cars'
      .string toPlural('key')
      .is 'keys'

    return null