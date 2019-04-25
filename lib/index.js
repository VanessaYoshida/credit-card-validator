function cardValidator(number) {
  num = number.toString();
  if (num.length > 11 && num.length <20){
    return num.split('')
    .reverse()
    .map( (x) => parseInt(x) )
    .map( (x,idx) => idx % 2 ? x * 2 : x )
    .map( (x) => x > 9 ? (x % 10) + 1 : x )
    .reduce( (accum, x) => accum += x ) % 10 === 0;
  } else {
    return false;
  }
}

module.exports.cardValidator = cardValidator;
