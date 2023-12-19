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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const messageUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < messageUpper.length; i++) {
      const char = messageUpper[i];
      if (char >= 'A' && char <= 'Z') {
        const charCode = ((char.charCodeAt(0) - 65) + (keyUpper.charCodeAt(keyIndex) - 65)) % 26 + 65;
        result += String.fromCharCode(charCode);
        keyIndex = (keyIndex + 1) % keyUpper.length;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const messageUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < messageUpper.length; i++) {
      const char = messageUpper[i];
      if (char >= 'A' && char <= 'Z') {
        const charCode = ((char.charCodeAt(0) - 65) - (keyUpper.charCodeAt(keyIndex) - 65) + 26) % 26 + 65;
        result += String.fromCharCode(charCode);
        keyIndex = (keyIndex + 1) % keyUpper.length;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
