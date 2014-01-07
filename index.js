'use strict';

// Percent calculation
exports.calc = function (number, base, decimal, sign) {
  if (base === 0) {
    return null;
  }
  else {
    return (number / base * 100).toFixed(decimal) + (sign ? '%' : '');
  }
};

// Add sign
exports.sign = function (thing) {
  return thing + '%';
};

// Remove sign(s)
exports.unsign = function (thing) {
  if (thing.match(/%/g)) {
    return thing.replace(/%/g, '');
  }
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
};