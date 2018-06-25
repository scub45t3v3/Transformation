toKebabCase = (value) ->
  return value
    ?.toString?()
    .trim()
    .replace /(?:\W|_)+/gm, '-'
    .replace /([a-z])([A-Z])/gm, '$1-$2'
    .toLowerCase()

module.exports = toKebabCase