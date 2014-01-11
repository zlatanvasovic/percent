/* global describe, it */

'use strict';

var percent = require('./index');
var assert = require('assert');

// Calculation tests
describe('percent.calc', function () {
  it('should return right percent values', function () {
    assert.equal(percent.calc(5, 20, 0, false), 25);
    assert.equal(percent.calc(5, 100, 0, false), 5);
  });

  it('should return right percent values with decimals', function () {
    assert.equal(percent.calc(8, 9, 2, false), 88.89);
    assert.equal(percent.calc(50, 6, 2, false), 833.33);
  });

  it('should be good with nulls', function () {
    assert.equal(percent.calc(0, 5, 0, false), 0);
    assert.equal(percent.calc(5, 0, 0, false), null);
  });

  it('should return right percent values with percent sign', function () {
    assert.equal(percent.calc(5, 20, 0, true), '25%');
    assert.equal(percent.calc(5, 100, 0, true), '5%');
  });
});

// Append sign tests
describe('percent.sign', function () {
  it('should add percent sign', function () {
    assert.equal(percent.sign(5), '5%');
    assert.equal(percent.sign('25'), '25%');
  });
});

// Remove sign tests
describe('percent.unsign', function () {
  it('should remove percent sign(s)', function () {
    assert.equal(percent.unsign(' 5 % '), ' 5  ');
    assert.equal(percent.unsign('25 %%%'), '25 ');
    assert.equal(percent.unsign(25), 25);
  });
});

// Validation tests
describe('percent.valid', function () {
  it('should check if a given parameter is a valid percent', function () {
    assert.equal(percent.valid(5), true);
    assert.equal(percent.valid(' 5 '), true);
    assert.equal(percent.valid(' 5 % '), true);
    assert.equal(percent.valid('string'), false);
    assert.equal(percent.valid([5, '%']), false);
    assert.equal(percent.valid({value: 6}), false);
    assert.equal(percent.valid(function () {}), false);
  });
});