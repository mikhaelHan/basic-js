const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
const getDNSStats = (domains) => {
  const obj = {}
  domains.forEach(el => {
    let variable = '';
    el.split('.').reverse().forEach(val => {
      if (obj[`${variable}.${val}`] === undefined) {
        obj[`${variable}.${val}`] = 1;
        variable = `${variable}.${val}`
      }
      else {
        obj[`${variable}.${val}`] = obj[`${variable}.${val}`] + 1;
        variable = `${variable}.${val}`
      }
    })
  });
  return obj
}
module.exports = {
  getDNSStats
};
