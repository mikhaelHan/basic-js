const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const numberOfTimes = (num) => num !== undefined ? num : 1;
  const optionSelection = (option) => option !== undefined ? `${option}` : '';
  const choiceSeparator = (sep) => sep !== undefined ? sep : '+';
  const choiceaAdditionSeparator = (adSep) => adSep !== undefined ? adSep : '|';
  const mass = [];
  for (let i = 0; i < numberOfTimes(options.repeatTimes); i++) {
    mass.push(`${str}`);
    for (let k = 0; k < numberOfTimes(options.additionRepeatTimes); k++) {
      mass.push(optionSelection(options.addition));
      if (optionSelection(options.addition) !== '' && k !== (numberOfTimes(options.additionRepeatTimes) - 1)) {
        mass.push(choiceaAdditionSeparator(options.additionSeparator));
      }
    }
    if (i !== (numberOfTimes(options.repeatTimes) - 1)) {
      mass.push(choiceSeparator(options.separator));
    }
  }
  return mass.join('')
}

module.exports = {
  repeater
};
