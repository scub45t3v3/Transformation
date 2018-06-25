toCamelCase = (value) ->
  return value
    ?.toString?()
    .trim()
    .replace /(?:\W|_)+/gm, '_'
    .replace /^_+/, ''
    .replace /_+$/, ''
    .replace /_(.)/gm, (match, char) ->
      return char?.toUpperCase?() || char
    .replace /^[A-Z]/, (match) ->
      return match?.toLowerCase?() || match

module.exports = toCamelCase