{parse} = require 'json2csv'

toCSV = (value, opt = {}) ->
  return parse value, opt

module.exports = toCSV