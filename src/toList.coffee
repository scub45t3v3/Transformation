_ = require 'underscore'

toList = (value, opt = {}) ->
  _.defaults opt,
    delimiter: ', '
    last: ' and '

  value = _.filter _.flatten([value]), (v) ->
    return v? && v != ''

  last = value?.pop?()

  if !Array.isArray(value) || !value?.length
    return "#{last}" || ''

  last = "#{opt.last}#{last}"
  value = value?.join opt.delimiter

  return "#{value}#{last}"

module.exports = toList