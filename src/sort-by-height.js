const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
const sortByHeight = arr => {
  const arrOfUnits = [];
  const array = arr.filter((el, ind) => {
    if (el == -1) { arrOfUnits.push(ind) }
    else { return el }
  });
  array.sort((a, b) => a - b);
  arrOfUnits.forEach(el => array.splice(el, 0, -1))
  return array
}

module.exports = {
  sortByHeight
};
