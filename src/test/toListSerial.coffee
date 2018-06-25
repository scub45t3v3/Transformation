unit = require 'unit.js'
toListSerial = require '../toListSerial'

describe '#toListSerial', ->
  it 'should be a function', ->
    unit
      .function toListSerial

    return null

  it 'should return a string  of value if only 1 value is provided', ->
    unit
      .string toListSerial([1])
      .is '1'
      .string toListSerial('hi')
      .is 'hi'

    return null

  it 'should return a comma seperated list with "and" as the last seperator when called with default options', ->
    unit
      .string toListSerial([1, 2, 3])
      .is '1, 2, and 3'
      .string toListSerial(['big', 'tall'])
      .is 'big, and tall'

    return null

  it 'should return a delimited list using provided options', ->
    unit
      .string toListSerial(['apples', 'oranges', 'bananas'], {delimiter: '; '})
      .is 'apples; oranges; and bananas'
      .string toListSerial(['alpha', 'beta', 'rc', 'release'], {delimiter: '-', last: '>'})
      .is 'alpha-beta-rc->release'

    return null