toTokens = (value, delimiter = /\s+/) ->
  return value?.toString?()?.split?(delimiter) || []

module.exports = toTokens