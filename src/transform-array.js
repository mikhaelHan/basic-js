const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
const transform = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let resMass = [...arr];
  resMass.forEach((el, ind) => {
    if (el === '--discard-next') {
      ind < (resMass.length - 1) ? resMass.splice(ind, 2, 'dell') : resMass.splice(ind, 1)
    }
    else if (el === '--discard-prev') {
      ind > 0 ? resMass.splice(ind - 1, 2, 'dell') : resMass.splice(ind, 1)
    }
    else if (el === '--double-next') {
      ind < (resMass.length - 1) ? resMass.splice(ind, 1, resMass[ind + 1]) : resMass.splice(ind, 1)
    }
    else if (el === '--double-prev') {
      ind > 0 ? resMass.splice(ind, 1, resMass[ind - 1]) : resMass.splice(ind, 1)
    }
  })
  return resMass.filter(el => el !== 'dell')
}

module.exports = {
  transform
};
