const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    value !== undefined ? this.chain.push(`( ${value} )`) : this.chain.push('( )');
    return this
  },
  removeLink(position) {
    if (this.chain[position - 1] == undefined) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    else {
      this.chain.splice(position - 1, 1);
      return this
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this
  },
  finishChain() {
    let res = this.chain;
    this.chain = [];
    return res.join('~~')
  }
};

module.exports = {
  chainMaker
};
