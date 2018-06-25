unit = require 'unit.js'
toSlug = require '../toSlug'

describe '#toSlug', ->
  it 'should be a function', ->
    unit
      .function toSlug

    return null

  it 'should return a slug when given a string', ->
    unit
      .string toSlug('hello world')
      .is 'hello-world'
      .string toSlug('helloWorld')
      .is 'hello-World'
      .string toSlug('＄ vs €')
      .is 'dollar-vs-euro'

    return null

  it 'should return a slug when given an array', ->
    unit
      .string toSlug(['hello', 'world'])
      .is 'hello-world'
      .string toSlug(['＄', 'vs', '€'])
      .is 'dollar-vs-euro'

    return null