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
    : 0;
  let separator = options.hasOwnProperty("separator") ? options.separator : "+";
  let addition = options.hasOwnProperty("addition") ? options.addition : "";
  let additionRepeatTimes = options.hasOwnProperty("additionRepeatTimes")
    ? options.additionRepeatTimes
    : 0;
  let additionSeparator = options.hasOwnProperty("additionSeparator")
    ? options.additionSeparator
    : "|";
  let result = [];
  let temp = getStr(addition, {
    repeatTimes: additionRepeatTimes,
    separator: additionSeparator,
  });
  function getStr(s, obj) {
    for (let i = 0; i < obj.repeatTimes; i++) {
      result.push(str);
    }
    return result.join(obj.separator);
  }
  return getStr(addition, {
    repeatTimes: repeatTimes,
    separator: temp,
  });
  //
}

module.exports = {
  repeater,
};
