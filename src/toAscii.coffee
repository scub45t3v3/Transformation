_ = require 'underscore'
currencies = require './util/currencies'
diacritics = require './util/diacritics'
symbols = require './util/symbols'
toString = require './toString'

charMap = _.extend {}, currencies, diacritics, symbols

toAscii = (value) ->
  if Array.isArray(value)
    value = value.join ' '

  return toString value
    ?.split ''
    .map (char) ->
      if char.codePointAt(0) > 128
        char = charMap[char] || ''

      return char
    .join ''

module.exports = toAscii