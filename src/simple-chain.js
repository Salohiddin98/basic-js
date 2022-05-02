const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )~~`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position != "number" ||
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.chain.length
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      position = position - 1;
      let temp = [];
      for (let i = 0; i < this.chain.length; i++) {
        if (i != position) {
          temp.push(this.chain[i]);
        }
      }
      this.chain = temp;
    }
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let temp = this.chain;
    this.chain = [];
    return temp.join("").slice(0, -2);
  },
};

module.exports = {
  chainMaker,
};
