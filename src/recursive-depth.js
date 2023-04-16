const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    if (Array.isArray(arr)) {
      arr.forEach(el => {
        let difCount = 1
        if (Array.isArray(el)) {
          difCount = difCount + this.calculateDepth(el);
          if (difCount > count) { count = difCount }
        }
      })
    }
    return count
  }
}

module.exports = {
  DepthCalculator
};
