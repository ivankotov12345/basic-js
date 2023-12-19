const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let counter = 0;

  const flattedArr = matrix.flat().map(el => {
    if(typeof el === 'string') {
      el.replace(/\s/g, '')
    }
    return el;
  });

  for(let i = 0; i < flattedArr.length; i += 1) {
    if(flattedArr[i] === '^^') {
      counter += 1;
    }
  }

  return counter;
}

module.exports = {
  countCats
};
