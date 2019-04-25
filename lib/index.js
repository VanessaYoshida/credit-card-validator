function cardValidator(numCard) {
  console.log(numCard);
  if (isNaN(numCard) === true){
    return false;
  }
  if (numCard === ""){
    return false;
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
