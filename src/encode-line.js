const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
const encodeLine = str => {
  const mass = [];
  str.split('').forEach(el => {
    if (el !== mass[mass.length - 1]) { mass.push(1); mass.push(el) }
    else { mass[mass.length - 2]++ }
  });
  const result = mass.filter(el => el !== 1)
  return result.join('')
}

module.exports = {
  encodeLine
};
