toString = (value) ->
  if !value?
    value = ''

  return value?.toString?() || "#{value}"

module.exports = toString