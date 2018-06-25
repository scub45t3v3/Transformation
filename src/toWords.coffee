toTokens = require './toTokens'

toWords = (value) ->
  return toTokens value, /[!?.]?[\s,]+/

module.exports = toWords