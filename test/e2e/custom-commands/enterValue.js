exports.command = function (selctor, value) {
  return this.clearValue(selector)
    .setValue(selector, value)
    .trigger(selector, 'keyup', 13)
}