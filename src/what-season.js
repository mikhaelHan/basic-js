const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
const getSeason = (date) => {
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Invalid date!')
  }
  const sesons = { 11: 'winter', 0: 'winter', 1: 'winter', 2: 'spring', 3: 'spring', 4: 'spring', 5: 'summer', 6: 'summer', 7: 'summer', 8: 'autumn', 9: 'autumn', 10: 'autumn' }
  try {
    isNaN(date)
  }
  catch (error) {
    throw new Error('Invalid date!');
  }
  return sesons[date.getMonth()]
}

module.exports = {
  getSeason
};
