###
# this is a direct passthrough to json2csv all tests should be preformed on
# json2csv this is only included to test the passthrough is setup as expected
###
unit = require 'unit.js'
toCSV = require '../toCSV'

describe '#toCSV', ->
  it 'should be a function', ->
    unit
      .function toCSV

    return null

  it 'should return a csv string for an object', ->
    test =
      firstName: 'James'
      lastName: 'Bond'
      age: 55

    regex = ///^
      \s*"firstName"\s*,
      \s*"lastName"\s*,
      \s*"age"\s*
      "James"\s*,
      \s*"Bond"\s*,
      \s*55\s*
    $///m

    unit
      .string toCSV(test)
      .match regex

    return null