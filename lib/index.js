const cardValidator = function (card) {

  return ["a", "e", "i", "o", "u"].indexOf(card) > -1;

};

module.exports = cardValidator;
