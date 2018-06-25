REGEX = ///^
(?:
  0+              # 0
  |\-             # -
  |null           # null
  |undefined      # undefined
  |NaN            # NaN
  |off            # off
  |f(?:alse)?     # f or false
  |no(?:ne)?      # no or none
  |neg(?:ative)?  # neg or negative
  |               # empty string
)
$///i

toBoolean = (value) ->
  return !!value && !REGEX.test((value?.toString?() || "#{value}")?.trim?())

module.exports = toBoolean