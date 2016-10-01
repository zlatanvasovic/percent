# Percent

[![Build Status](https://travis-ci.org/zdroid/percent.svg?branch=master)](https://travis-ci.org/zdroid/percent)
[![devDependency Status](https://david-dm.org/zdroid/percent/dev-status.svg)](https://david-dm.org/zdroid/percent#info=devDependencies)

> Percent control done right

Percent is a npm module which gives you nice options to control percentages.
It's like `semver` for percentages.

## Install

```bash
$ npm install percent
```

## Examples

**Calculate percentage**

```js
const percent = require('percent');

console.log(percent.calc(5, 20, 0)); // => 25
```

**Validate percentage**

```js
const percent = require('percent');

if (percent.valid(5)) { // => true
  console.log('5 is a valid percent value');
}
```

**Compare percentages**

```js
const percent = require('percent');

if (percent.lt('5%', 6)) { // => true
  console.log('a is smaller than b');
}
```

## API

```js
const percent = require('percent');
```

### `.calc()`

**Usage:** `percent.calc(value, total, decimal, [sign])`  
**Example:** `percent.calc(5, 20, 0)`

Calculates percentage from the given number (`value`) and total number
(`total`) with specified number of decimals (`decimal`).

`sign` may be boolean which turns percent sign (`%`) addition. Returns percent
value with percent sign if `sign` is `true` (it's `false` by default). If
`sign` is string, it will be used as value suffix.

### `.re`

**Usage:** `percent.re`

Returns supreme percent regexp.

### `.valid()`

**Usage:** `percent.valid(value)`  
**Example:** `percent.valid('5%')`

Checks if `value` is valid percent value. It is valid if it's number,
number-like string (e.g. `'10'`, not `10`), or string with number and percent
sign. Spaces are allowed in strings.

### `.sign()`

**Usage:** `percent.sign(value)`  
**Example:** `percent.sign(5)`

Adds percent sign to `value`.

### `.unsign()`

**Usage:** `percent.unsign(value)`  
**Example:** `percent.unsign('5%')`

Removes percent sign(s) from `value`.

### `.clean()`

**Usage:** `percent.clean(value)`  
**Example:** `percent.clean(' 5 %  ')`

Removes percent sign(s) and spaces from `value`.

### `.convert()`

**Usage:** `percent.convert(value, [negative])`  
**Example:** `percent.convert(' 5 %  ')`

Converts percent-like string to number. Returns negative number if `negative`
is `true`.

### `.lt()`

**Usage:** `percent.lt(l, t)`  
**Example:** `percent.lt('5%', 6)`

Checks is the first argument smaller than second.

### `.gt()`

**Usage:** `percent.gt(g, t)`  
**Example:** `percent.gt('6%', 5)`

Checks is the first argument greater than second.

### `.eq()`

**Usage:** `percent.eq(e, q)`  
**Example:** `percent.eq('5%', 5)`

Checks are the arguments logically equal.

### `.neq()`

**Usage:** `percent.neq(ne, q)`  
**Example:** `percent.neq('6%', 5)`

Checks are the arguments logically unequal.

### `.satisfies()`

**Usage:** `percent.satisfies(value, min, max)`  
**Example:** `percent.satisfies(5.5, 5, 6)`

Checks does the value satisfy the given range. It will exchange `min` and `max`
values if `min` is bigger than `max`.

## License

MIT &copy; [Zlatan Vasović](https://github.com/zdroid)
