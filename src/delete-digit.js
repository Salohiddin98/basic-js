const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = Array.from(String(n), Number);
  let result = [];
  for (let i = 0; i < n.length; i++) {
    let temp = "";
    for (let j = 0; j < n.length; j++) {
      if (i != j) {
        temp += n[j];
      }
    }
    result.push(parseInt(temp));
  }

  return Math.max(...result);
}

module.exports = {
  deleteDigit,
};
