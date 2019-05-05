const cardValidator = (numCardStr) => {
  const numCardInt = parseInt(numCardStr);
  if (isNaN(numCardInt)) {
    throw new TypeError('Digite somente números!');
  } if (typeof numCardStr === 'number') {
    throw new TypeError('Tipo do campo incorreto, deveria ser tipo string.');
  } if (numCardStr.length > 11 && numCardStr.length < 20) {
    const digitsCard = numCardStr.replace(/[^\d]/g, '');
    return algorithmLuhn(digitsCard);
  } else {
    return false;
  }
};
const algorithmLuhn = (num) => {
  return num.split('').reverse()
    .map((num, idNum) => idNum % 2 ? parseInt(num) * 2 : parseInt(num))
    .map((num) => num > 9 ? (num % 10) + 1 : num)
    .reduce((accum, num) => accum += num) % 10 === 0;
};
module.exports.cardValidator = cardValidator;
