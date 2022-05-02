const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.hasOwnProperty("repeatTimes")
    ? options.repeatTimes
    : 1;
  let separator = options.hasOwnProperty("separator") ? options.separator : "+";
  let addition = options.hasOwnProperty("addition")
    ? "" + options.addition
    : "";
  let additionRepeatTimes = options.hasOwnProperty("additionRepeatTimes")
    ? options.additionRepeatTimes
    : 1;
  let additionSeparator =
    options.hasOwnProperty("additionSeparator") && addition != ""
      ? options.additionSeparator
      : "|";
  function getResult(s, obj) {
    let temp = [];
    for (let i = 0; i < obj.repeatTimes; i++) {
      temp.push(s);
    }
    return temp.join(obj.separator);
  }
  const atemp = getResult(addition, {
    repeatTimes: additionRepeatTimes,
    separator: additionSeparator,
  });
  str = str + atemp;
  return getResult(str, {
    repeatTimes: repeatTimes,
    separator: separator,
  });
}

module.exports = {
  repeater,
};
