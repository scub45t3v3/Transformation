###
# this is a direct passthrough to util.format all tests should be preformed
# on util.format this is only included to test the passthrough is setup as
# expected
###
unit = require 'unit.js'
toFormat = require '../toFormat'

describe '#toFormat', ->
  it 'should be a function', ->
    unit
      .function toFormat

    return null

  it 'should return a string formated print-f style', ->
    unit
      .string toFormat('%s, %s', 'Bond', 'James')
      .is 'Bond, James'
      .string toFormat('%d-%d-%d', 1963, 12, 31)
      .is '1963-12-31'
      .string toFormat('$> %j', {a: 5})
      .match /^\$>\s*{\s*"a"\s*:\s*5\s*}\s*$/

    return null