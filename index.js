'use strict';

// Percent calculation
exports.calc = function (number, base, decimal, sign) {
  if (base === 0) {
    return null;
  }
  return (number / base * 100).toFixed(decimal) + (sign ? '%' : '');
};

// Add percent sign
exports.sign = function (thing) {
  return thing + '%';
};

// Remove percent sign(s)
exports.unsign = function (thing) {
  if (typeof thing === 'string' && thing.match(/%/g)) {
    return thing.replace(/%/g, '');
  }
  return thing;
};

// Percent validation
exports.valid = function (thing) {
  if (typeof thing === 'number') {
    return true;
  }
  if (typeof thing === 'string') {
    if (thing.match(/^\s?\d+\s?$/) || thing.match(/^\s?\d+\s?%\s?$/)) {
      return true;
    }
  }
  return false;
};