const chai = require('chai');
const expect = chai.expect;
const CC = require('../lib/index');

describe('cardValidator()', () => {
    it('Deveria retornar true para 5526988157883653', () => {
        expect(CC.cardValidator(5526988157883653)).to.equal(true);
    });
    
    it('Deveria retornar false para 1234567891234567', () => {
        expect(CC.cardValidator(1234567891234567)).to.equal(false);
    });
});