/*!
 * Percent v1.0.3 (http://git.io/percentjs)
 * Licensed under the MIT license.
 */

'use strict';

/*
 * Percent calculation
 */

exports.calc = function (value, total, decimal, sign) {
  var wrong = [NaN, Infinity, -Infinity];
  var i;

  // Set defaults
  if (sign === null) {
    sign = false;
  }

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
  for (i in wrong) {
    if ([value, total, decimal].indexOf(i) > -1) {
      return i;
    }
  }

  return (value / total * 100).toFixed(decimal) + (sign ? '%' : '');
};

/*
 * Percent validation
 */

exports.valid = function (value) {
  if (typeof value === 'number' ||
      (typeof value === 'string' && value.match(/^\s?\d+\s?%?\s?$/))) {
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

/*
 * Percent comparision
 */

exports.lt = function (l, t) {
  if (exports.valid(l) && exports.valid(t)) {
    if (exports.unsign(l) < exports.unsign(t)) {
      return true;
    }
  }

  return false;
};

exports.gt = function (g, t) {
  if (exports.valid(g) && exports.valid(t)) {
    if (exports.unsign(g) > exports.unsign(t)) {
      return true;
    }
  }

  return false;
};

exports.eq = function (e, q) {
  if (exports.valid(e) && exports.valid(q)) {
    if (exports.unsign(e) == exports.unsign(q)) {
      return true;
    }
  }

  return false;
};

exports.neq = function (ne, q) {
  if (exports.valid(ne) && exports.valid(q)) {
    if (exports.unsign(ne) != exports.unsign(q)) {
      return true;
    }
  }

  return false;
};
