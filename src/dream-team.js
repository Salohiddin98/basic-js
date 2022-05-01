const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = "";
  let temp = [];
  if (!Array.isArray(members)) {
    return false;
  }
  members.forEach((name) => {
    if (typeof name != "string") {
      return false;
    }
    temp.push(name.trim().toUpperCase());
  });
  temp.sort().forEach((name) => {
    result += name.trim().charAt(0);
  });
  return result;
}

module.exports = {
  createDreamTeam,
};
