# Transformation

<a name="status"></a>
[![Build Status](https://travis-ci.org/scub45t3v3/Transformation.svg?branch=master)](https://travis-ci.org/scub45t3v3/Transformation)
[![Coverage Status](https://coveralls.io/repos/github/scub45t3v3/Transformation/badge.svg)](https://coveralls.io/github/scub45t3v3/Transformation)

<a name="toc"></a>
## Table of Content
  * [Status](#status)
  * [Purpose](#purpose)
  * [Installation](#installation)
  * [API](#api)
  * [Test](#test)
  * [License](#license)

<a name="purpose"></a>
## Purpose
Collection of helpful functions for data transformation

<a name="installation"></a>
## Installation
Via [npm](https://www.npmjs.com/)

```bash
npm install @scuba-squad/transformation
```

<a name="api"></a>
## API
### `toArray(value: mixed, opt: ?object = {flatten: false}): array`
**Added in:** v1.0.0

Convert `value` to an array

**arguments:**
1. `value: mixed`
2. `opt: ?object`
    - `flatten: boolean = false`

**returns:** array

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toArray('hello world'); // ['hello', 'world']
Transformation.toArray({a: 5, b: true}); // [['a', 5], ['b', true]]
Transformation.toArray(new Set([1, 2, 3])); // [1, 2, 3]
```

### `toAscii(value: mixed): string`
**Added in:** v1.0.0

Convert `value` to an ascii string

**arguments:**
1. `value: mixed`

**returns:** string

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toAscii('bismi ăl-lahi ăr-raḥmani ăr-raḥiymi'); // 'bismi al-lahi ar-ramani ar-raiymi'
Transformation.toAscii(['＄', 'vs', '€']); // 'dollar vs euro'
```

### `toBase64(value: mixed): string`
**Added in:** v1.0.0

Convert `value` to a base64 encoded string

**arguments:**
1. `value: mixed`

**returns:** string

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toBase64('scubaSquad'); // 'c2N1YmFTcXVhZA=='
Transformation.toBase64(NaN); // 'bnVsbA=='
Transformation.toBase64([null, false, {}, [4]]); // 'W251bGwsZmFsc2Use30sWzRdXQ=='
```

### `toBoolean(value: mixed): boolean`
**Added in:** v1.0.0

Convert `value` to a boolean

**arguments:**
1. `value: mixed`

**returns:** boolean

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toBoolean('hi'); // true
Transformation.toBoolean({a: 5}); // true

Transformation.toBoolean('false'); // false
Transformation.toBoolean('off'); // false
Transformation.toBoolean('no'); // false
Transformation.toBoolean('      '); // false
```

### `toCamelCase(value: mixed): string`
**Added in:** v1.0.0

Convert `value` to a camelCase string

**arguments:**
1. `value: mixed`

**returns:** string

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toCamelCase('-person- -'); // 'person'
Transformation.toCamelCase('JSON_2_XML'); // 'jSON2XML'
Transformation.toCamelCase('@scuba-squad/transformation:toCamelCase'); // 'scubaSquadTransformationToCamelCase'
Transformation.toCamelCase(['scuba', 'squad']); // 'scubaSquad'
```

### `toCSV(value: mixed, opt: ?object = {}): string`
**Added in:** v1.0.0

**see:** [json2csv](https://www.npmjs.com/package/json2csv)

Convert `value` to a CSV string

**arguments:**
1. `value: mixed`
2. `opt: ?object`

**returns:** string

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toCSV([{a: 5}, {b: 4}, {a: 3}]); // '"a","b"\n5,\n,4\n3,'
```

### `toFormat(value: string, ...args: mixed): string`
**Added in:** v1.0.0

**see:** [util.format](https://nodejs.org/dist/latest-v10.x/docs/api/util.html#util_util_format_format_args)

Convert `value` to a string replacing format placeholders with arg[n] value

**arguments:**
1. `value: string`
2. `...args: mixed`

**returns:** string

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toFormat('%s: %n', 'number', 5); // 'number: 5'
```

### `toJSON(value: mixed, space: string | number = 2): string`
**Added in:** v1.0.0

Convert `value` to serialized json

**arguments:**
1. `value: mixed`
2. `space: string | number = 2`

**returns:** string

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toJSON({a: 5}); // '{\n  "a": 5\n}'
Transformation.toJSON({a: 5}, 0); // '{"d":5}'
Transformation.toJSON({a: 5}, '\t'); // '{\n\t"d": 5\n}'
```

### `toKebabCase(value: mixed): string`
**Added in:** v1.0.0

Convert `value` to kebab-case string

**arguments:**
1. `value: mixed`

**returns:** string

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toKebabCase('@scuba-squad/transformation:toKebabCase'); // '-scuba-squad-transformation-to-kebab-case'
Transformation.toKebabCase(['scuba', 'squad']); // 'scuba-squad'
```

### `toLines(value: mixed): array`
**Added in:** v1.0.0

Convert `value` to an array of lines

**arguments:**
1. `value: mixed`

**returns:** array

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toLines('1\n2\r\n3'); // ['1', '2', '3']
Transformation.toLines('1\n\n2\r\n3\n'); // ['1, '', '2', '3', '']
```

### `toList(value: array, opt: ?object = {delimiter: ?string = ', ', last: ?string = ' and '}): string`
**Added in:** v1.0.0

Convert `value` to a list string

**arguments:**
1. `value: array`
2. `compare: ?object`
    - `delimiter: string = ', '`
    - `last: string = ' and '`

**returns:** string

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toList([1, 2, 3]); // '1, 2 and 3'
Transformation.toList([127, 0, 0, 1], {
  delimiter: '.',
  last: '.',
}); // '127.0.0.1'
Transformation.toList([1, 0, 4, 'beta'], {
  delimiter: '.',
  last: '-',
}); // '1.0.4-beta'
```

### `toListSerial(value: array, opt: ?object = {delimiter: ?string = ', ', last: ?string = ' and '}): string`
**Added in:** v1.0.0

Convert `value` to a serial list string

**arguments:**
1. `value: array`
2. `compare: ?object`
    - `delimiter: string = ', '`
    - `last: string = ' and '`

**returns:** string

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toListSerial([1, 2, 3]); // '1, 2, and 3'
Transformation.toListSerial(['apples', 'oranges', 'bananas'], {
  delimiter: '; ',
}); // 'apples; oranges; and bananas'
Transformation.toListSerial(['alpha', 'beta', 'rc', 'release'], {
  delimiter: '-',
  last: '>',
}); // 'alpha-beta-rc->release'
```

### `toMD5(value: mixed): string`
**Added in:** v1.0.0

Convert `value` to an md5 encoded hash string

**arguments:**
1. `value: mixed`

**returns:** string

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toMD5('scubaSquad'); // '3c4c897839aa60f8e6707d8f82256792'
Transformation.toMD5({a: 5}); // '9b574798ab3bf7351f82eaf817c96d50'
Transformation.toMD5([null, false, {}, [4]]); // '505f1cc6122ee7a344b3edfd75e008cf'
```

### `toNumber(value: mixed): number`
**Added in:** v1.0.0

Convert `value` to number

**arguments:**
1. `value: mixed`

**returns:** number

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toNumber('3.5'); // 3.5
Transformation.toNumber(false); // 0
Transformation.toNumber(true); // 1
Transformation.toNumber(new Date('2000-01-01')); // 946684800000
Transformation.toNumber('hello'); // NaN
```

### `toPascalCase(value: mixed): string`
**Added in:** v1.0.0

Convert `value` to PascalCase string

**arguments:**
1. `value: mixed`

**returns:** string

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toPascalCase('@scuba-squad/transformation:toPascalCase'); // 'ScubaSquadTransformationToPascalCase'
Transformation.toPascalCase(['scuba', 'squad']); // 'ScubaSquad'
```

### `toPlural(value: string): string`
**Added in:** v1.0.0

**see:** [pluralize](https://www.npmjs.com/package/pluralize)

Convert `value` to a plural string

**arguments:**
1. `value: string`

**returns:** string

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toPlural('car'); // 'cars'
Transformation.toPlural('wife'); // 'wives'
Transformation.toPlural('woman'); // 'women'
```

### `toRegExp(value: mixed): RegExp`
**Added in:** v1.0.0

Convert `value` to a RegExp

**arguments:**
1. `value: mixed`

**returns:** RegExp

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toRegExp(/asd/i); // /asd/i
Transformation.toRegExp('|asd|i'); // /asd/i
Transformation.toRegExp('%^\\d+$%g'); // /^\d+$/g
```

### `toSingular(value: string): string`
**Added in:** v1.0.0

**see:** [pluralize](https://www.npmjs.com/package/pluralize)

Convert `value` to a singular string

**arguments:**
1. `value: mixed`

**returns:** string

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toSingular('cars'); // 'car'
Transformation.toSingular('wives'); // 'wife'
Transformation.toSingular('women'); // 'woman'
```

### `toSlug(value: mixed): string`
**Added in:** v1.0.0

Convert `value` to a slug

**arguments:**
1. `value: string`

**returns:** string

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toSlug('helloWorld'); // 'hello-World'
Transformation.toSlug('＄ vs €'); // 'dollar-vs-euro'
Transformation.toSlug(['＄', 'vs', '€']); // 'dollar-vs-euro'
```

### `toSnakeCase(value: mixed): string`
**Added in:** v1.0.0

Convert `value` to snake_case string

**arguments:**
1. `value: mixed`

**returns:** string

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toSnakeCase('@scuba-squad/transformation:toSnakeCase'); // '_scuba_squad_transformation_to_snake_case'
Transformation.toSnakeCase(['scuba', 'squad']); // 'scuba_squad'
```

### `toString(value: mixed): string`
**Added in:** v1.0.0

Convert `value` to a string

**arguments:**
1. `value: mixed`

**returns:** string

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toString([1, 2, 3]); // '1,2,3'
Transformation.toString({a: 5}); // '[object Object]'
Transformation.toString(); // ''
```

### `toTokens(value: string, delimiter: RegExp | string = /\s+/): array`
**Added in:** v1.0.0

Convert `value` to an array of tokens

**arguments:**
1. `value: mixed`
2. `delimiter: ?RegExp | string = /\s+/`

**returns:** array

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toTokens('fruit: apples, oranges, bananas'); // ['fruit:', 'apples,', 'oranges,', 'bananas']
Transformation.toTokens('fruit: apples, oranges, bananas', /\W+/); // ['fruit', 'apples', 'oranges', 'bananas']
```

### `toWords(value: mixed): array`
**Added in:** v1.0.0

Convert `value` to an array of words

**arguments:**
1. `value: mixed`

**returns:** array

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toWords('fruit: apples, oranges, bananas'); // ['fruit', 'apples', 'oranges', 'bananas']
Transformation.toWords('this is $1.00'); // ['this', 'is', '$1.00']
Transformation.toWords('a,b,c'); // ['a', 'b', 'c']
```

### `towrap(value: mixed, opt: {start: ?string, end: ?string} = {}): string`
**Added in:** v1.0.0

Convert `value` to a wrapped string

**arguments:**
1. `value: mixed`
2. `opt: ?object`
      - `start: ?string` beginning value to wrap the string
      - `end: ?string` closing value to wrap the string

**returns:** string

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toWrap('hello'); // 'hello'
Transformation.toWrap('tag', {start: '<', end: '>'}); // '<tag>'
Transformation.toWrap([1,2,3], {start: '[', end: ']'}); // '[1,2,3]'
Transformation.toWrap('regex', {start: '/'}); // '/regex/'
Transformation.toWrap('quote', {end: '"'}); // '"quote"'
```

### `toXML(value: mixed, opt: {spaces: number, compact: boolean, indentCdata: boolean} = {spaces: 2, compact: true, indentCdata: true}): string`
**Added in:** v1.0.0

**see:** [xml-js](https://www.npmjs.com/package/xml-js)

Convert `value` to a XML string

**arguments:**
1. `value: mixed`
2. `opt: ?object`
    - `spaces: 2`
    - `compact: true`
    - `indentCdata: true`

**returns:** string

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toXML({name: {first: 'James', last: 'Bond'}, age: 55}); // '<name>\n  <first>James</first>\n  <last>Bond</last>\n</name>\n<age>55</age>'
```

### `toYAML(value: mixed, opt: {skipinvalid: boolean} = {skipInvalid: true}): string`
**Added in:** v1.0.0

**see:** [js-yaml](https://www.npmjs.com/package/js-yaml)

Convert `value` to a YAML string

**arguments:**
1. `value: mixed`
2. `opt: ?object`
    - `skipInvalid: true`

**returns:** string

```javascript
const Transformation = require('@scuba-squad/transformation');

Transformation.toXML({name: {first: 'James', last: 'Bond'}, age: 55}); // 'name:\n  first: James\n  last: Bond\nage: 55\n'
```

<a name="test"></a>
## Test
[tests](TEST.md)
```bash
npm install
npm test
```

<a name="license"></a>
## License
[MIT](LICENSE)