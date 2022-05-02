const { NotImplementedError } = require("../extensions/index.js");
/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(bool = true) {
    this.bool = bool;
  }

  encrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    } else {
      return this.action(str, key, true);
    }
  }
  decrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    } else {
      return this.action(str, key, false);
    }
  }
  action(str, key, action) {
    // prettier-ignore
    let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    // prettier-ignore
    key = key.toUpperCase().split("").map((item) => alphabet.indexOf(item));
    // prettier-ignore
    let strTemp = str.toUpperCase().split("");
    strTemp = strTemp.map((item) => alphabet.indexOf(item));
    let result = [];
    let check = [];
    for (let i = 0, j = 0; i < strTemp.length; i++) {
      if (j < key.length) {
        if (strTemp[i] != -1) {
          //encrypt
          if (action === true) {
            result.push(
              strTemp[i] + key[j] < 26
                ? alphabet[strTemp[i] + key[j]]
                : alphabet[strTemp[i] + key[j] - 26]
            );
          }
          //decrypt
          else {
            result.push(
              strTemp[i] - key[j] < 0
                ? alphabet[strTemp[i] - key[j] + 26]
                : alphabet[strTemp[i] - key[j]]
            );
          }
        } else {
          j--;
          result.push(str[i]);
        }
        j++;
      } else {
        j = 0;
        i--;
      }
    }
    return this.bool ? result.join("") : result.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
