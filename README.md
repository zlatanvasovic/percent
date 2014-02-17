# Percent [![Build status](https://travis-ci.org/ZDroid/percent.png?branch=master)](https://travis-ci.org/ZDroid/percent) [![devDependency status](https://david-dm.org/ZDroid/percent/dev-status.png?theme=shields.io)](https://david-dm.org/ZDroid/percent#info=devDependencies)

> Percent control done right

Percent is npm module which gives you fine options to control percentages.

## Install

```bash
$ npm install percent
```

## Examples

**Calculate percentage**

```js
var percent = require('percent');

console.log(percent.calc(5, 20, 0, false)); // => 25
```

**Validate percentage**

```js
var percent = require('percent');

if (percent.valid(5)) { // => true
  console.log('5 is valid percent value');
}
```

**Compare percentages**

```js
var percent = require('percent');

var a = '5%';
var b = 6;

if (percent.lt(a, b)) { // => true
  console.log('a is smaller than b');
}
```

## API

```js
var percent = require('percent');
```

### .calc()

**Usage:** `percent.calc(value, total, decimal [, sign])`  
**Example:** `percent.calc(5, 20, 0)`

Calculates percentage from the given number (`value`) and total number
(`total`) with specified number of decimals (`decimal`).

`sign` is boolean which turns percent sign (`%`) addition. Returns percent
value with percent sign if `sign` is `true` (it's false by default).

### .valid()

**Usage:** `percent.valid(thing)`  
**Example:** `percent.valid('5%')`

Checks if `thing` is valid percent value. It is valid if it's number,
number-like string (e.g. `'10'`, not `10`), or string with number and percent
sign. Spaces are allowed in strings.

### .sign()

**Usage:** `percent.sign(thing)`  
**Example:** `percent.sign(5)`

Adds percent sign to `thing`.

### .unsign()

**Usage:** `percent.unsign(thing)`  
**Example:** `percent.unsign('5%')`

Removes percent sign(s) from `thing`.

### .lt()

**Usage:** `percent.lt(l, t)`  
**Example:** `percent.lt('5%', 6)`

Checks is the first argument smaller than second.

### .gt()

**Usage:** `percent.gt(g, t)`  
**Example:** `percent.gt('6%', 5)`

Check is the first argument greater than second.

### .eq()

**Usage:** `percent.eq(e, q)`  
**Example:** `percent.eq('5%', 5)`

Checks are the arguments logically equal.

### .neq()

**Usage:** `percent.neq(ne, q)`  
**Example:** `percent.neq('6%', 5)`

Checks are the arguments logically unequal.

## License

MIT &copy; [Zlatan Vasović](https://github.com/ZDroid)
