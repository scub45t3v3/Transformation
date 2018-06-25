###
# this is a direct passthrough to pluralize all tests should be preformed on
# pluralize this is only included to test the passthrough is setup as expected
###
unit = require 'unit.js'
toSingular = require '../toSingular'

describe '#toSingular', ->
  it 'should be a function', ->
    unit
      .function toSingular

    return null

  it 'should return a singular version of a word', ->
    unit
      .string toSingular('tables')
      .is 'table'
      .string toSingular('chairs')
      .is 'chair'
      .string toSingular('cars')
      .is 'car'
      .string toSingular('keys')
      .is 'key'

    return null