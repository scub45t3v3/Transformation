toSnakeCase = (value) ->
  return value
    ?.toString?()
    .trim()
    .replace /(?:\W|_)+/gm, '_'
    .replace /([a-z])([A-Z])/gm, '$1_$2'
    .toLowerCase()

module.exports = toSnakeCase