/* global describe, it */

'use strict';

var percent = require('./');
var assert = require('assert');

// Percent calculation tests
describe('percent.calc', function () {
  it('should return right percent values', function () {
    assert.equal(percent.calc(5, 20, 0), 25);
    assert.equal(percent.calc(5, 100, 0), 5);
  });

  it('should return right percent values with decimals', function () {
    assert.equal(percent.calc(8, 9, 2), 88.89);
    assert.equal(percent.calc(50, 6, 2), 833.33);
  });

  it('should ignore wrong values', function () {
    assert.equal(percent.calc([], 5, 0), null);
    assert.equal(percent.calc(0, 5, 0), 0);
    assert.equal(percent.calc(5, 0, 0), 0);
    assert.equal(percent.calc(NaN, 0, 0), 0);
    assert.equal(percent.calc(Infinity, 5, 0), Infinity);
    assert.equal(percent.calc(-Infinity, 5, 0), -Infinity);
  });

  it('should return right percent values with percent sign', function () {
    assert.equal(percent.calc(5, 20, 0, true), '25%');
    assert.equal(percent.calc(5, 100, 0, true), '5%');
  });
});

// Percent validation tests
describe('percent.valid', function () {
  it('should validate given argument as percent', function () {
    assert.equal(percent.valid(5), true);
    assert.equal(percent.valid(' 5 '), true);
    assert.equal(percent.valid(' 5 % '), true);
    assert.equal(percent.valid('string'), false);
    assert.equal(percent.valid([5, '%']), false);
    assert.equal(percent.valid({value: 6}), false);
    assert.equal(percent.valid(function () {}), false);
  });
});

// Add sign tests
describe('percent.sign', function () {
  it('should add percent sign', function () {
    assert.equal(percent.sign(5), '5%');
    assert.equal(percent.sign('25'), '25%');
  });
  it('should ignore wrong values', function () {
    assert.equal(percent.sign('25%'), '25%');
    assert.deepEqual(percent.sign({sign: 6}), {sign: 6});
  });
});

// Percent cleaning tests
describe('percent.unsign', function () {
  it('should remove percent sign(s)', function () {
    assert.equal(percent.unsign(' 5 % '), ' 5  ');
    assert.equal(percent.unsign('25 %%%'), '25 ');
  });
  it('should ignore wrong values', function () {
    assert.equal(percent.unsign(25), 25);
    assert.deepEqual(percent.unsign([25, 25]), [25, 25]);
  });
});

describe('percent.clean', function () {
  it('should remove percent sign(s) and spaces', function () {
    assert.equal(percent.clean(' 5 % '), '5');
    assert.equal(percent.clean('25 %%%'), '25');
  });
  it('should ignore wrong values', function () {
    assert.equal(percent.clean(25), 25);
    assert.deepEqual(percent.clean([25, 25]), [25, 25]);
  });
});

// Percent comparision tests
describe('percent.lt', function () {
  it('should check is the first argument smaller than second', function () {
    assert.equal(percent.lt(5, 6), true);
    assert.equal(percent.lt('5', '6'), true);
    assert.equal(percent.lt('5%', 6), true);
    assert.equal(percent.lt([], {}), false);
  });
});

describe('percent.gt', function () {
  it('should check is the first argument greater than second', function () {
    assert.equal(percent.gt(6, 5), true);
    assert.equal(percent.gt('6', '5'), true);
    assert.equal(percent.gt('6%', 5), true);
    assert.equal(percent.gt({}, {}), false);
  });
});

describe('percent.eq', function () {
  it('should check are the arguments equal', function () {
    assert.equal(percent.eq(5, 5), true);
    assert.equal(percent.eq('5', '5'), true);
    assert.equal(percent.eq('5%', 5), true);
    assert.equal(percent.eq([], []), false);
  });
});

describe('percent.neq', function () {
  it('should check are the arguments unequal', function () {
    assert.equal(percent.neq(6, 5), true);
    assert.equal(percent.neq('6', '5'), true);
    assert.equal(percent.neq('6%', 5), true);
    assert.equal(percent.neq(/first/g, /second/g), false);
  });
});
