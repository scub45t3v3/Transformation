toJSON = (value, space = 2) ->
  return JSON.stringify value, null, space

module.exports = toJSON