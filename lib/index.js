function cardValidator(numCard) {

  let numCardTeste = parseInt(numCard);

  if (typeof numCard === 'number') {
    throw new TypeError('Digite somente números!');
  }

  if (isNaN(numCardTeste) === true) {
    throw new TypeError('Digite somente números!');
  }

  if (numCard === ""){
    throw new TypeError('Não é permitido campo vazio'); 
  }

  if(numCard.length > 11 && numCard.length < 20){
    return algorithmLuhn(numCard);
  }

  return false;
}

function algorithmLuhn(num){
  return num.split('')
  .reverse()
  .map( (x) => parseInt(x) )
  .map( (x,idx) => idx % 2 ? x * 2 : x )
  .map( (x) => x > 9 ? (x % 10) + 1 : x )
  .reduce( (accum, x) => accum += x ) % 10 === 0;
}

module.exports.cardValidator = cardValidator;
