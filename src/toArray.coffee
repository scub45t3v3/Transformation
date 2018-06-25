_ = require 'underscore'
toWords = require './toWords'

toArray = (value = [], opt = {}) ->
  if value instanceof String || typeof value == 'string'
    value = toWords value

  if !Array.isArray(value)
    value = Array?.from?(value) || _.values(value)

  if !!opt?.flatten
    value = _.flatten value

  if typeof opt?.filter == 'function'
    value = _.filter value, opt.filter

  return value

module.exports = toArray