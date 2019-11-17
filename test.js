/*!
 * Tests required for percent.
 * Licensed under the MIT license.
 */

const assert = require('assert');
const percent = require('./');

// Percent calculation tests
describe('percent.calc', () => {
  const test = percent.calc;

  it('should return right percent values', () => {
    assert.equal(test(5, 20, 0), 25);
    assert.equal(test(5, 100, 0), 5);
  });

  it('should return right percent values with decimals', () => {
    assert.equal(test(8, 9, 2), 88.89);
    assert.equal(test(50, 6, 2), 833.33);
  });

  it('should return right percent values with percent sign', () => {
    assert.equal(test(5, 20, 0, true), '25%');
    assert.equal(test(5, 100, 0, true), '5%');
    assert.equal(test(5, 100, 0, ' %'), '5 %');
    assert.equal(test(5, 100, 0, ' percent'), '5 percent');
  });

  it('should ignore bad values', () => {
    assert.equal(test([], 5, 0), null);
    assert.equal(test(0, 5, 0), 0);
    assert.equal(test(5, 0, 0), 0);
    assert.equal(test(5, -0, 0), 0);
    assert.equal(test(NaN, 0, 0), 0);
    assert.equal(test(Infinity, 5, 0), Infinity);
    assert.equal(test(-Infinity, 5, 0), -Infinity);
  });
});

// Percent validation tests
describe('percent.valid', () => {
  const test = percent.valid;

  it('should validate given argument as percent', () => {
    assert.equal(test(5), true);
    assert.equal(test(' 5 '), true);
    assert.equal(test(' 5 % '), true);
    assert.equal(test('5.01'), true);
    assert.equal(test(1.37), true);
    assert.equal(test('1,57.35%'), true);
    assert.equal(test('string'), false);
    assert.equal(test([5, '%']), false);
    assert.equal(test({ value: 6 }), false);
    assert.equal(test(new Function()), false); /* eslint no-new-func: 0 */
  });
});

// Add sign tests
describe('percent.sign', () => {
  const test = percent.sign;

  it('should add percent sign', () => {
    assert.equal(test(5), '5%');
    assert.equal(test('25'), '25%');
  });

  it('should ignore wrong values', () => {
    assert.equal(test('25%'), '25%');
    assert.deepEqual(test({ sign: 6 }), { sign: 6 });
  });
});

// Percent cleaning tests
describe('percent.unsign', () => {
  const test = percent.unsign;

  it('should remove percent sign(s)', () => {
    assert.equal(test(' 5 % '), ' 5  ');
    assert.equal(test('25 %%%'), '25 ');
  });

  it('should ignore wrong values', () => {
    assert.equal(test(25), 25);
    assert.deepEqual(test([25, 25]), [25, 25]);
  });
});

describe('percent.clean', () => {
  const test = percent.clean;

  it('should remove percent sign(s) and spaces', () => {
    assert.equal(test(' 5 % '), '5');
    assert.equal(test('25 %%%'), '25');
  });

  it('should ignore wrong values', () => {
    assert.equal(test(25), 25);
    assert.deepEqual(test([25, 25]), [25, 25]);
  });
});

describe('percent.convert', () => {
  const test = percent.convert;

  it('should convert given value to number', () => {
    assert.equal(test('   5 %%%'), 5);
    assert.equal(test(' 6.6 %%%%%', true), -6.6);
    assert.equal(test(6, true), -6);
    assert.equal(test('lol'), 'lol');
  });
});

// Percent comparision tests
describe('percent.lt', () => {
  const test = percent.lt;

  it('should check is the first argument smaller than second', () => {
    assert.equal(test(5, 6), true);
    assert.equal(test('5', '6'), true);
    assert.equal(test('5%', 6), true);
    assert.equal(test([], {}), false);
  });
});

describe('percent.gt', () => {
  const test = percent.gt;

  it('should check is the first argument greater than second', () => {
    assert.equal(test(6, 5), true);
    assert.equal(test('6', '5'), true);
    assert.equal(test('6%', 5), true);
    assert.equal(test({}, {}), false);
  });
});

describe('percent.eq', () => {
  const test = percent.eq;

  it('should check are the arguments equal', () => {
    assert.equal(test(5, 5), true);
    assert.equal(test('5', '5'), true);
    assert.equal(test('5%', 5), true);
    assert.equal(test([], []), false);
  });
});

describe('percent.neq', () => {
  const test = percent.neq;

  it('should check are the arguments unequal', () => {
    assert.equal(test(6, 5), true);
    assert.equal(test('6', '5'), true);
    assert.equal(test('6%', 5), true);
    assert.equal(test(/first/g, /second/g), false);
  });
});

describe('percent.satisfies', () => {
  const test = percent.satisfies;

  it('should check does the value satisfy the given range', () => {
    assert.equal(test(5.5, 5, 6), true);
    assert.equal(test('6', '7', '5'), true);
    assert.equal(test('5.5%', 7, 5), true);
    assert.equal(test('5.5', 5.5, 5), true);
    assert.equal(test(5.5, 5.7, 6), false);
    assert.equal(test([], [], []), false);
  });
});
