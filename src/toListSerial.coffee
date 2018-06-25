toList = require './toList'

toListSerial = (value, opt = {}) ->
  opt.delimiter or= ', '
  opt.last or= ' and '
  opt.last = "#{opt.delimiter}#{opt.last}".replace /\s+/, ' '

  return toList value, opt

module.exports = toListSerial