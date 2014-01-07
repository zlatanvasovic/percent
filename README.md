# Percent [![Build status](https://travis-ci.org/ZDroid/percent.png?branch=master)](https://travis-ci.org/ZDroid/percent) [![devDependency status](https://david-dm.org/ZDroid/percent/dev-status.png?theme=shields.io)](https://david-dm.org/ZDroid/percent#info=devDependencies)

> Percent control done right

Percent is npm module which gives you fine options to manage percentages.

Licensed under the MIT License.

## Install

With [npm](https://npmjs.org):

```bash
$ npm install --save percent
```

## Example

```javascript
var percent = require('percent');

console.log(percent.calc(5, 20, 0, false)); // => 25
```

## API

### percent.calc(number, base, decimal, sign)

Example: `percent.calc(5, 20, 0, false)`

Calculates percent value from given number (`number`) and base number (`base`)
with specified number of decimals (`decimal`).

`sign` is boolean which turns percent sign (`%`) addition. `percent.calc` will
return percent value with percent sign if `sign` is `true`. 

### percent.sign(thing)

Example: `percent.sign(5)`

Adds percent sign to `thing`.

### percent.unsign(thing)

Example: `percent.unsign('5%')`

Removes percent sign(s) from `thing`.

### percent.valid(thing)

Example: `percent.valid('5%')`

Checks if `thing` is valid percent value. It is valid if it's number,
number-like string (e.g. `'10'`, not `10`), or string with number and percent
sign. Spaces are allowed in strings.

## License

MIT &copy; [Zlatan Vasović](https://github.com/ZDroid)