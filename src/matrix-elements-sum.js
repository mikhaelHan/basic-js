const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
const getMatrixElementsSum = matrix => {
  let result = 0;
  const index = [];
  matrix.forEach((el, indEl) => {
    el.forEach((val, indVal) => {
      if (val == 0) {
        index.push(`${indEl}${indVal}`)
      }
      else if (!index.includes(`${indEl - 1}${indVal}`)) {
        result += val
      }
    })
  });
  return result
}

module.exports = {
  getMatrixElementsSum
};
