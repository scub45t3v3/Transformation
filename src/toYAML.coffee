yaml = require 'js-yaml'

toYAML = (value, opt = {}) ->
  return yaml.safeDump value, opt

module.exports = toYAML