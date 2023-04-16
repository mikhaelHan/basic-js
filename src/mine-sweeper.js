const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
const minesweeper = (matrix) => {
  const checking = (mass, elList, ElItem) => {
    let num = 0;
    if (elList === 0) {
      if (mass[elList][ElItem - 1] == true) { num += 1 }
      if (mass[elList][ElItem + 1] == true) { num += 1 }
      if (mass[elList + 1][ElItem] == true) { num += 1 }
      if (mass[elList + 1][ElItem - 1] == true) { num += 1 }
      if (mass[elList + 1][ElItem + 1] == true) { num += 1 }
    }
    else if (elList === mass.length - 1) {
      if (mass[elList][ElItem - 1] == true) { num += 1 }
      if (mass[elList][ElItem + 1] == true) { num += 1 }
      if (mass[elList - 1][ElItem] == true) { num += 1 }
      if (mass[elList - 1][ElItem - 1] == true) { num += 1 }
      if (mass[elList - 1][ElItem + 1] == true) { num += 1 }
    }
    else {
      if (mass[elList][ElItem - 1] == true) { num += 1 }
      if (mass[elList][ElItem + 1] == true) { num += 1 }
      if (mass[elList - 1][ElItem] == true) { num += 1 }
      if (mass[elList - 1][ElItem - 1] == true) { num += 1 }
      if (mass[elList - 1][ElItem + 1] == true) { num += 1 }
      if (mass[elList + 1][ElItem] == true) { num += 1 }
      if (mass[elList + 1][ElItem - 1] == true) { num += 1 }
      if (mass[elList + 1][ElItem + 1] == true) { num += 1 }
    }
    return num
  }
  const result = matrix.map((el, indEl) => {
    return el.map((val, indVal) => {
      return checking(matrix, indEl, indVal)
    });
  })
  return result
}

module.exports = {
  minesweeper
};
