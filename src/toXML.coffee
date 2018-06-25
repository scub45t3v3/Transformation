_ = require 'underscore'
xml = require 'xml-js'

toXML = (value, opt = {}) ->
  _.defaults opt,
    spaces: 2
    compact: true
    indentCdata: true

  return xml.json2xml value, opt

module.exports = toXML