toPascalCase = (value) ->
  return value
    ?.toString?()
    .trim()
    .replace /(?:\W|_)+/gm, '_'
    .replace /^_+/, ''
    .replace /_+$/, ''
    .replace /_(.)/gm, (match, char) ->
      return char?.toUpperCase?() || char
    .replace /^[a-z]/, (match) ->
      return match?.toUpperCase?() || match

module.exports = toPascalCase