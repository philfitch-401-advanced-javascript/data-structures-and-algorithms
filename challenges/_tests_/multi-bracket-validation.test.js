
const multiBracketValidation = require('../multiBracketValidation/multi-bracket-validation');

describe('multiBracketValidation', () => {
  it('return true for balanced brackets', () => {
    expect(multiBracketValidation('{}')).toBe(true);
    expect(multiBracketValidation('{}(){}')).toBe(true);
    expect(multiBracketValidation('()[[Extra Characters]]')).toBe(true);
    expect(multiBracketValidation('(){}[[]]')).toBe(true);
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toBe(true);
  });

  it('return false for unbalanced brackets', () => {
    expect(multiBracketValidation('[({}]')).toBe(false);
    expect(multiBracketValidation('(](')).toBe(false);
    expect(multiBracketValidation('{(})')).toBe(false);
    expect(multiBracketValidation('{')).toBe(false);
    expect(multiBracketValidation(')')).toBe(false);
    expect(multiBracketValidation('[}')).toBe(false);
  });
});
