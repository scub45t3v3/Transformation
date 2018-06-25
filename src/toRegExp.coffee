toString = require './toString'

REGEX = /^([`~!@#$%^&*+=|\\?/])(.+)\1([gimuy]*)$/

toRegExp = (value) ->
  if (value instanceof RegExp)
    return value

  match = toString(value).match REGEX

  if !match?[2]
    throw new TypeError "#{value} can not be transformed to a RegExp"

  return new RegExp match[2], match[3]

module.exports = toRegExp