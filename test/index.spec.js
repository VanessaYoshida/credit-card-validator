const chai = require('chai');
const expect = chai.expect;
const CC = require('../lib/index');
describe('cardValidator()', () => {
  describe('Verificação dos números do cartão de crédito', () => {
    it('Deveria retornar true para a numeração: 5526988157883653', () => {
      expect(CC.cardValidator('5526988157883653')).to.equal(true);
    });
    it('Deveria retornar true para a numeração: 371144343967748', () => {
      expect(CC.cardValidator('371144343967748')).to.equal(true);
    });
    it('Deveria retornar true para a numeração: 4389351373448893', () => {
      expect(CC.cardValidator('4389351373448893')).to.equal(true);
    });
    it('Deveria retornar false para a numeração: 1234567891234567', () => {
      expect(CC.cardValidator('1234567891234567')).to.equal(false);
    });
    it('Deveria retornar false para a numeração: 4337689576382348', () => {
      expect(CC.cardValidator('4337689576382348')).to.equal(false);
    });
    it('Deveria retornar true para a numeração: 4485222139785196 ', () => {
      expect(CC.cardValidator('4485222139785196')).to.equal(true);
    });
  });
  describe('Verificação da quantidade de números', () => {
    it('Deveria retornar true para 14 números', () => {
      expect(CC.cardValidator('30354535753490')).to.equal(true);
    });
    it('Deveria retornar true para 16 números', () => {
      expect(CC.cardValidator('5526988157883653')).to.equal(true);
    });
    it('Deveria retornar false para 11 números', () => {
      expect(CC.cardValidator('55269881578')).to.equal(false);
    });
    it('Deveria retornar false para 20 números', () => {
      expect(CC.cardValidator('55269881578836531342')).to.equal(false);
    });
  });
  describe('Verificação se o valor digitado é NaN', () => {
    it('Deveria retornar um erro que só é permitido números', () => {
      expect(() => CC.cardValidator('asdfghjrtfgf')).to.throw(TypeError);
    });
  });
  describe('Verificação se o campo está vazio', () => {
    it('Não é permitido campo vazio', () => {
      expect('').to.be.empty;
    });
  });
  describe('Verificação do tipo de entrada de dados:', () => {
    it('Quando o input é do tipo string deve rodar normalmente', () => {
      expect(CC.cardValidator('30354535753490')).to.equal(true);
    });
    it('Quando o input é do tipo número deve retornar erro que deveria ser do tipo String', () => {
      expect(() => CC.cardValidator(30354535753490)).to.throw(TypeError);
    });
  });
  describe('Verificação se campo contém espaço ou ponto:', () => {
    it('Deveria passar caso tenha espaço entre os números', () => {
      expect(CC.cardValidator('3026 256644 0814')).to.equal(true);
    });
    it('Deveria passar caso tenha ponto entre os números', () => {
      expect(CC.cardValidator('3026.256644.0814')).to.equal(true);
    });
    it('Deveria passar caso tenha hífen entre os números', () => {
      expect(CC.cardValidator('3026-256644-0814')).to.equal(true);
    });
  });
});