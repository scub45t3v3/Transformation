unit = require 'unit.js'
toString = require '../toString'

describe '#toString', ->
  it 'should be a function', ->
    unit
      .function toString

    return null