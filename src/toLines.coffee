toTokens = require './toTokens'

toLines = (value) ->
  return toTokens value, /\r\n?|\n/gm

module.exports = toLines