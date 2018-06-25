_ = require 'underscore'
currencies = require './util/currencies'
diacritics = require './util/diacritics'
symbols = require './util/symbols'
toString = require './toString'

charMap = _.extend {}, currencies, diacritics, symbols

toSlug = (value) ->
  if Array.isArray(value)
    value = value.join ' '

  return toString value
    ?.split ''
    .map (char) ->
      return charMap[char] || char
    .join ''
    .trim()
    .replace /[\s_-]+/g, '-'
    .replace /^-+|-+$/g, ''
    .replace /([a-z])([A-Z])/gm, '$1-$2'
    .replace /[^\w.\-~!$&'()*+,;=':@%]+/, ''

module.exports = toSlug