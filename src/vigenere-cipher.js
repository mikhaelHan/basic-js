const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (val) {
    this.bool = (val === undefined || val === true) ? true : false;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.num = {};

    for (let i = 0; i < this.alphabet.length; i++) {
      this.num[this.alphabet[i]] = i;
    }
  }


  encrypt(text, key) {

    if (!text || !key) throw new Error('Incorrect arguments!');
    else {

      text = text.toUpperCase();
      key = key.toUpperCase();
      let code = '';
      let k = 0;

      for (let i = 0; i < text.length; i++) {

        if (this.alphabet.includes(text[i])) {

          code += this.alphabet[(this.num[text[i]] + this.num[key[k % key.length]]) % this.alphabet.length];
          k++;
        }
        else code += text[i];
      }

      return this.bool ? code : code.split('').reverse().join('');
    }
  }


  decrypt(text, key) {

    if (!text || !key) throw new Error('Incorrect arguments!');
    else {

      text = text.toUpperCase();
      key = key.toUpperCase();
      let code = '';
      let k = 0;

      for (let i = 0; i < text.length; i++) {

        if (this.alphabet.includes(text[i])) {

          code += this.alphabet[(this.num[text[i]] - this.num[key[k % key.length]] + this.alphabet.length) % this.alphabet.length];
          k++;
        }
        else code += text[i];
      }

      return this.bool ? code : code.split('').reverse().join('');

    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
