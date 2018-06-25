unit = require 'unit.js'
toAscii = require '../toAscii'

describe '#toAscii', ->
  it 'should be a function', ->
    unit
      .function toAscii

    return null

  it 'should return an ascii string when given a string', ->
    unit
      .string toAscii('hello world')
      .is 'hello world'
      .string toAscii('helloWorld')
      .is 'helloWorld'
      .string toAscii('＄ vs €')
      .is 'dollar vs euro'
      .string toAscii('$100.00')
      .is '$100.00'
      .string toAscii('bismi ăl-la\'hi ăr-raḥma\'ni ăr-raḥiymi')
      .is 'bismi al-la\'hi ar-rama\'ni ar-raiymi'

    return null

  it 'should return an ascii string when given an array', ->
    unit
      .string toAscii(['hello', 'world'])
      .is 'hello world'
      .string toAscii(['＄', 'vs', '€'])
      .is 'dollar vs euro'

    return null