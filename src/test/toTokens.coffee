unit = require 'unit.js'
toTokens = require '../toTokens'

describe '#toTokens', ->
  it 'should be a function', ->
    unit
      .function toTokens

    return null