(function() {
  var toYAML, yaml;

  yaml = require('js-yaml');

  toYAML = function(value, opt = {}) {
    return yaml.safeDump(value, opt);
  };

  module.exports = toYAML;

}).call(this);
