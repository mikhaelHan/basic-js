const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
const createDreamTeam = members => {
  if (Array.isArray(members)) {
    const mass = [];
    members.forEach(el => {
      if (typeof (el) === 'string') {
        mass.push(el.trim().toUpperCase().split('').slice(0, 1).join(''))
      }
    })
    return mass.length !== 0 ? mass.sort().join('') : false
  }
  else return false
}

module.exports = {
  createDreamTeam
};
