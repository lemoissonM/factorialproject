/* eslint-disable linebreak-style */

const validateData = (number) => {
  if (number === undefined || number < 0 || isNaN(number)) return false;
  return true;
};
const checkParity = (number, toogleEven) => {
  if (number % 2 === 0 && toogleEven) return true;
  if (number % 2 !== 0 && !toogleEven) return true;
  return false;
};
function calculateFactorial(number, isDoubleFactorial) {
  if (validateData(number)) {
    if (number === 0) return 1;
    if (number === 1) return 1;
    let result = 1;
    if (!isDoubleFactorial || isDoubleFactorial === false) {
      for (let num = 1; num <= number; num += 1) {
        result *= num;
      }
    } else {
      let isEven = false;
      if (number % 2 === 0)isEven = true;
      else isEven = false;
      for (let num = 1; num <= number; num += 1) {
        if (checkParity(num, isEven)) { result *= num; }
      }
    }
    return result;
  }
  return -1;
}


module.exports = calculateFactorial;
