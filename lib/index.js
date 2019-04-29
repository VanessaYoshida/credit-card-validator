const cardValidator = (numCardStr) => {
  const numCardInt = parseInt(numCardStr);

  if (isNaN(numCardInt) === true) {
    throw new TypeError('Digite somente números!');
  } if (typeof numCardStr === 'number') {
      throw new TypeError('Tipo do campo incorreto, deveria ser tipo string.');
    } if (numCardStr.indexOf(' ') >= 0 ||
          numCardStr.indexOf('.') >= 0 ||
          numCardStr.indexOf('-') >= 0){
            throw new TypeError('Digite apenas números. Não pode conter espaços, ponto ou hífen.');
          } if(numCardStr.length > 11 && numCardStr.length < 20){
          return algorithmLuhn(numCardStr);
        } else {
            return false;
          }
}

// try {
//   if (numCardStr < 12) throw 'A quantidade de números não pode ser menor que 12'
//   if (numCardStr > 19) throw 'A quantidade de números não pode ser maior que 19'
// } catch (e){
//   logMyErrors(e);
// }

const algorithmLuhn = (num) => {
  return num.split('')
  .reverse()
  .map( (num) => parseInt(num) )
  .map( (num,idNum) => idNum % 2 ? num * 2 : num )
  .map( (num) => num > 9 ? (num % 10) + 1 : num )
  .reduce( (accum, num) => accum += num ) % 10 === 0;
}

module.exports.cardValidator = cardValidator;
