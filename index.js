/*!
 * Percent v1.1.1 (http://git.io/percentjs)
 * Licensed under the MIT license.
 */

'use strict';

/*
 * Percent calculation
 */

exports.calc = function (value, total, decimal, sign) {
  var badNumbers = [NaN, Infinity, -Infinity];

  // Avoid argument type problems
  if (typeof value !== 'number' ||
      typeof total !== 'number' ||
      typeof decimal !== 'number') {
    return null;
  }

  // Don't divide by zero
  if (total === 0) {
    return 0;
  }

  // Avoid wrong numbers
  for (var i = 0; i < badNumbers.length; i++) {
    if ([value, total, decimal].indexOf(badNumbers[i]) > -1) {
      return badNumbers[i];
    }  
  }

  // Define the sign
  if (typeof sign !== 'string') {
    sign = sign ? '%' : '';
  }

  return (value / total * 100).toFixed(decimal) + sign;
};

/*
 * Percent validation
 */

// Supreme percent regexp
exports.re = /^\s?[-+]?(\d*[.])?\d+\s?%?\s?$/;

exports.valid = function (value) {
  if (typeof value === 'number' ||
      (typeof value === 'string' && value.match(exports.re))) {
    return true;
  }

  return false;
};

/*
 * Add percent sign
 */

exports.sign = function (value) {
  if (typeof value === 'number' ||
      (typeof value === 'string' && !value.match(/%/g))) {
    return value + '%';
  }

  return value;
};

/*
 * Clean the percent
 */

exports.unsign = function (value) {
  if (typeof value === 'string') {
    return value.replace(/%/g, '');
  }

  return value;
};

exports.clean = function (value) {
  value = exports.unsign(value);

  if (typeof value === 'string') {
    return value.replace(/\s/g, '');
  }

  return value;
};

exports.convert = function (value, negative) {
  value = exports.clean(value);

  if (exports.valid(value)) {
    if (negative) {
      return -value;
    }

    return +value;
  }

  return value;
};

/*
 * Percent comparision
 */

exports.lt = function (l, t) {
  if (exports.valid(l) && exports.valid(t) &&
      exports.convert(l) < exports.convert(t)) {
    return true;
  }

  return false;
};

exports.gt = function (g, t) {
  if (exports.valid(g) && exports.valid(t) &&
      exports.convert(g) > exports.convert(t)) {
    return true;
  }

  return false;
};

exports.eq = function (e, q) {
  if (exports.valid(e) && exports.valid(q) &&
      exports.convert(e) == exports.convert(q)) {
    return true;
  }

  return false;
};

exports.neq = function (ne, q) {
  if (exports.valid(ne) && exports.valid(q) &&
      exports.convert(ne) != exports.convert(q)) {
    return true;
  }

  return false;
};

exports.satisfies = function (value, min, max) {
  // Sort min and max by size
  if (min > max) {
    var _max = max;
    max = min;
    min = _max;
  }

  if (exports.valid(value) &&
      exports.valid(min) && exports.valid(max) &&
      exports.convert(value) >= exports.convert(min) &&
      exports.convert(value) <= exports.convert(max)) {
    return true;
  }

  return false;
};
