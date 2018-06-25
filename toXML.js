(function() {
  var _, toXML, xml;

  _ = require('underscore');

  xml = require('xml-js');

  toXML = function(value, opt = {}) {
    _.defaults(opt, {
      spaces: 2,
      compact: true,
      indentCdata: true
    });
    return xml.json2xml(value, opt);
  };

  module.exports = toXML;

}).call(this);
