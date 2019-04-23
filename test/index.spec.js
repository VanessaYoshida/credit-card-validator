const { assert } = require('chai');
const isVowel = require('../lib/index');

describe('cardValidator()', () => {
    
    it('Deveria retornar true para a letra a', () => {
        assert.equal(isVowel('a'), true);
    });
    
    it('Deveria retornar false para a letra b', () => {
        assert.equal(isVowel('b'), false);
    });
    
});