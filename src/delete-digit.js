const { NotImplementedError } = require('../extensions/index.js');

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
const deleteDigit = n => {
  const more = (mass, ind) => {
    const num = mass.filter((el, i) => i !== ind)
    return Number(num.join(''))
  }
  n = n.toString().split('');
  let result = 0;
  n.forEach((el, i) => {
    if (more(n, i) > result) { result = more(n, i) }
  });
  return result
}

module.exports = {
  deleteDigit
};
