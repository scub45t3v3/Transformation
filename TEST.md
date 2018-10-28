# TOC
   - [@scuba-squad/transformation](#scuba-squadtransformation)
   - [#toArray](#toarray)
   - [#toAscii](#toascii)
   - [#toBoolean](#toboolean)
   - [#toCSV](#tocsv)
   - [#toCamelCase](#tocamelcase)
   - [#toFormat](#toformat)
   - [#toJSON](#tojson)
   - [#toKebabCase](#tokebabcase)
   - [#toLines](#tolines)
   - [#toList](#tolist)
   - [#toListSerial](#tolistserial)
   - [#toNumber](#tonumber)
   - [#toPascalCase](#topascalcase)
   - [#toPlural](#toplural)
   - [#toRegExp](#toregexp)
   - [#toSingular](#tosingular)
   - [#toSlug](#toslug)
   - [#toSnakeCase](#tosnakecase)
   - [#toString](#tostring)
   - [#toTokens](#totokens)
   - [#toWords](#towords)
   - [#toWrap](#towrap)
   - [#toXML](#toxml)
   - [#toYAML](#toyaml)
<a name=""></a>
 
<a name="scuba-squadtransformation"></a>
# @scuba-squad/transformation
should have several functions.

```js
unit
  .object(index)
  .hasProperties(FUNCTIONS)
  .matchEach((value, key) => {
    return typeof value === 'function' && /^to[A-Z]/.test(key);
  });
```

<a name="toarray"></a>
# #toArray
should be a function.

```js
unit
  .function(toArray);
```

should return an empty array for undefined and null.

```js
unit
  .array(toArray())
  .is([])
  .array(toArray(null))
  .is([]);
```

should return an array for an array.

```js
unit
  .array(toArray([1, 2, 3]))
  .is([1, 2, 3])
  .array(toArray(['a', 'b', 'c']))
  .is(['a', 'b', 'c'])
  .array(toArray([
    [1, 2, 3],
    ['a', 'b', 'c'],
  ]))
  .is([
    [1, 2, 3],
    ['a', 'b', 'c'],
  ])
  .array(toArray([
    {z: true},
    {x: 'no'},
    {y: 0},
  ]))
  .is([
    {z: true},
    {x: 'no'},
    {y: 0},
  ]);
```

should return an array for a Set.

```js
unit
  .array(toArray(new Set([1, 2, 3])))
  .is([1, 2, 3])
  .array(toArray(new Set(['a', 'b', 'c'])))
  .is(['a', 'b', 'c'])
  .array(toArray(new Set([
    [1, 2, 3],
    ['a', 'b', 'c'],
  ])))
  .is([
    [1, 2, 3],
    ['a', 'b', 'c'],
  ])
  .array(toArray(new Set([
    {z: true},
    {x: 'no'},
    {y: 0},
  ])))
  .is([
    {z: true},
    {x: 'no'},
    {y: 0},
  ]);
```

should return an array for a Map.

```js
unit
  .array(toArray(new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ])))
  .is([
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ]);
```

should return an array for an object.

```js
unit
  .array(toArray({
    a: 1,
    b: true,
    c: 'hi',
    d: {
      g: false,
    },
  }))
  .is([
    ['a', 1],
    ['b', true],
    ['c', 'hi'],
    ['d', {g: false}],
  ]);
```

should return an array for a string.

```js
unit
  .array(toArray('hello world'))
  .is(['hello', 'world'])
  .array(toArray('bye'))
  .is(['bye']);
```

should return a single-dimensional array for multi-dimensional when given the flatten opt.

```js
const test = {
  flatten: true,
};
unit
  .array(toArray([
    [1],
    [],
    [
      true,
      [{}],
    ],
  ], test))
  .is([
    1,
    true,
    {},
  ])
  .array(toArray(new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ]), test))
  .is([
    'a',
    1,
    'b',
    2,
    'c',
    3,
  ]);
```

<a name="toascii"></a>
# #toAscii
should be a function.

```js
unit
  .function(toAscii);
```

should return an ascii string when given a string.

```js
unit
  .string(toAscii('hello world'))
  .is('hello world')
  .string(toAscii('helloWorld'))
  .is('helloWorld')
  .string(toAscii('＄ vs €'))
  .is('dollar vs euro')
  .string(toAscii('$100.00'))
  .is('$100.00')
  .string(toAscii('bismi ăl-la\'hi ăr-raḥma\'ni ăr-raḥiymi'))
  .is('bismi al-la\'hi ar-rama\'ni ar-raiymi');
```

should return an ascii string when given an array.

```js
unit
  .string(toAscii(['hello', 'world']))
  .is('hello world')
  .string(toAscii(['＄', 'vs', '€']))
  .is('dollar vs euro');
```

<a name="toboolean"></a>
# #toBoolean
should retun true for true booleans.

```js
unit
  .bool(toBoolean(true))
  .isTrue()
  .bool(toBoolean(new Boolean(1)))
  .isTrue();
```

should return true for non falsey strings.

```js
unit
  .bool(toBoolean('true'))
  .isTrue()
  .bool(toBoolean('1'))
  .isTrue()
  .bool(toBoolean('a'))
  .isTrue()
  .bool(toBoolean('hello'))
  .isTrue()
  .bool(toBoolean('  hi   '))
  .isTrue()
  .bool(toBoolean('+'))
  .isTrue();
```

should return true to numbers != 0.

```js
unit
  .bool(toBoolean(1))
  .isTrue()
  .bool(toBoolean(-1))
  .isTrue()
  .bool(toBoolean(Number.MAX_VALUE))
  .isTrue()
  .bool(toBoolean(Number.MIN_VALUE))
  .isTrue();
```

should return true for Infinity.

```js
unit
  .bool(toBoolean(2e308))
  .isTrue()
  .bool(toBoolean(-2e308))
  .isTrue();
```

should return true for arrays that don't stringify to falsy strings.

```js
unit
  .bool(toBoolean([1, 2]))
  .isTrue()
  .bool(toBoolean(['a']))
  .isTrue()
  .bool(toBoolean([0, 0, 3]))
  .isTrue();
```

should return true for objects that don't stringify to fasly strings.

```js
unit
  .bool(toBoolean({}))
  .isTrue()
  .bool(toBoolean({
    a: 5,
  }))
  .isTrue()
  .bool(toBoolean(new Set([1, 2])))
  .isTrue()
  .bool(toBoolean(new String(':')))
  .isTrue()
  .bool(toBoolean(new Date()))
  .isTrue()
  .bool(toBoolean(new Array(1, 2)))
  .isTrue()
  .bool(toBoolean(new RegExp()))
  .isTrue();
```

should return false for false booleans.

```js
unit
  .bool(toBoolean(false))
  .isFalse()
  .bool(toBoolean(new Boolean(0)))
  .isFalse();
```

should return false for falsy strings.

```js
unit
  .bool(toBoolean(''))
  .isFalse()
  .bool(toBoolean('     '))
  .isFalse()
  .bool(toBoolean('\n'))
  .isFalse()
  .bool(toBoolean('\r'))
  .isFalse()
  .bool(toBoolean('\v'))
  .isFalse()
  .bool(toBoolean('0'))
  .isFalse()
  .bool(toBoolean('false'))
  .isFalse()
  .bool(toBoolean('f'))
  .isFalse()
  .bool(toBoolean('off'))
  .isFalse()
  .bool(toBoolean('no'))
  .isFalse()
  .bool(toBoolean('none'))
  .isFalse()
  .bool(toBoolean('neg'))
  .isFalse()
  .bool(toBoolean('negative'))
  .isFalse()
  .bool(toBoolean('-'))
  .isFalse();
```

should return false for 0.

```js
unit
  .bool(toBoolean(0))
  .isFalse();
```

should return false for arrays that stringify to falsy strings.

```js
unit
  .bool(toBoolean([]))
  .isFalse()
  .bool(toBoolean([0]))
  .isFalse()
  .bool(toBoolean([false]))
  .isFalse()
  .bool(toBoolean(['NO']))
  .isFalse();
```

should return false for NaN.

```js
unit
  .bool(toBoolean(0 / 0))
  .isFalse();
```

should return false for null.

```js
unit
  .bool(toBoolean(null))
  .isFalse();
```

should return false for undefined.

```js
unit
  .bool(toBoolean())
  .isFalse()
  .bool(toBoolean(undefined))
  .isFalse();
```

<a name="tocsv"></a>
# #toCSV
should be a function.

```js
unit
  .function(toCSV);
```

should return a csv string for an object.

```js
const test = {
  firstName: 'James',
  lastName: 'Bond',
  age: 55,
};
const regex = /^\s*"firstName"\s*,\s*"lastName"\s*,\s*"age"\s*"James"\s*,\s*"Bond"\s*,\s*55\s*$/m;
unit
  .string(toCSV(test))
  .match(regex);
```

<a name="tocamelcase"></a>
# #toCamelCase
should be a function.

```js
unit
  .function(toCamelCase);
```

should return camelCase for camelCase strings.

```js
unit
  .string(toCamelCase('helloWorld'))
  .is('helloWorld')
  .string(toCamelCase('person'))
  .is('person')
  .string(toCamelCase('scubaSquad'))
  .is('scubaSquad')
  .string(toCamelCase('json2Xml'))
  .is('json2Xml')
  .string(toCamelCase('json2XML'))
  .is('json2XML');
```

should return camelCase for PascalCase strings.

```js
unit
  .string(toCamelCase('HelloWorld'))
  .is('helloWorld')
  .string(toCamelCase('Person'))
  .is('person')
  .string(toCamelCase('ScubaSquad'))
  .is('scubaSquad')
  .string(toCamelCase('Json2Xml'))
  .is('json2Xml')
  .string(toCamelCase('Json2xml'))
  .is('json2xml');
```

should return camelCase for snake_case strings.

```js
unit
  .string(toCamelCase('hello_world'))
  .is('helloWorld')
  .string(toCamelCase('_person'))
  .is('person')
  .string(toCamelCase('scuba_squad'))
  .is('scubaSquad')
  .string(toCamelCase('json_2_xml'))
  .is('json2Xml')
  .string(toCamelCase('hello__world'))
  .is('helloWorld')
  .string(toCamelCase('_person_'))
  .is('person')
  .string(toCamelCase('_scuba_squad_'))
  .is('scubaSquad')
  .string(toCamelCase('json_2_XML'))
  .is('json2XML')
  .string(toCamelCase('_Hello__World_'))
  .is('helloWorld')
  .string(toCamelCase('__Person__'))
  .is('person')
  .string(toCamelCase('scuba______squad'))
  .is('scubaSquad')
  .string(toCamelCase('JSON_2_XML'))
  .is('jSON2XML');
```

should return camelCase for kebab-case strings.

```js
unit
  .string(toCamelCase('hello-world'))
  .is('helloWorld')
  .string(toCamelCase('-person'))
  .is('person')
  .string(toCamelCase('scuba-squad'))
  .is('scubaSquad')
  .string(toCamelCase('json-2-xml'))
  .is('json2Xml')
  .string(toCamelCase('hello--world'))
  .is('helloWorld')
  .string(toCamelCase('-person-'))
  .is('person')
  .string(toCamelCase('-scuba-squad-'))
  .is('scubaSquad')
  .string(toCamelCase('-json-2-xml'))
  .is('json2Xml')
  .string(toCamelCase('-hello- -world-'))
  .is('helloWorld')
  .string(toCamelCase('-person- -'))
  .is('person')
  .string(toCamelCase('scuba------squad'))
  .is('scubaSquad')
  .string(toCamelCase('JSON-2-XML'))
  .is('jSON2XML');
```

should return camelCase for delimited strings.

```js
unit
  .string(toCamelCase('hello world'))
  .is('helloWorld')
  .string(toCamelCase('is,person'))
  .is('isPerson')
  .string(toCamelCase('@scuba-squad/transformation:toCamelCase'))
  .is('scubaSquadTransformationToCamelCase');
```

should return camelCase for arrays.

```js
unit
  .string(toCamelCase(['hello', 'world']))
  .is('helloWorld')
  .string(toCamelCase(['-', 'person']))
  .is('person')
  .string(toCamelCase(['scuba', 'squad']))
  .is('scubaSquad')
  .string(toCamelCase(['json', 2, 'xml']))
  .is('json2Xml')
  .string(toCamelCase(['json', 2, 'XML']))
  .is('json2XML');
```

<a name="toformat"></a>
# #toFormat
should be a function.

```js
unit
  .function(toFormat);
```

should return a string formated print-f style.

```js
unit
  .string(toFormat('%s, %s', 'Bond', 'James'))
  .is('Bond, James')
  .string(toFormat('%d-%d-%d', 1963, 12, 31))
  .is('1963-12-31')
  .string(toFormat('$> %j', {
    a: 5,
  }))
  .match(/^\$>\s*{\s*"a"\s*:\s*5\s*}\s*$/);
```

<a name="tojson"></a>
# #toJSON
should be a function.

```js
unit
  .function(toJSON);
```

should return a json string for an object.

```js
const test = {
  firstName: 'James',
  lastName: 'Bond',
  age: 55,
};
const regex = /^\s*{\s*"firstName"\s*:\s*"James"\s*,\s*"lastName"\s*:\s*"Bond"\s*,\s*"age"\s*:\s*55\s*}\s*$/m;
unit
  .string(toJSON(test))
  .match(regex);
```

<a name="tokebabcase"></a>
# #toKebabCase
should be a function.

```js
unit
  .function(toKebabCase);
```

should return kebab-case for kebab-case strings.

```js
unit
  .string(toKebabCase('hello-world'))
  .is('hello-world')
  .string(toKebabCase('-person'))
  .is('-person')
  .string(toKebabCase('scuba-squad'))
  .is('scuba-squad')
  .string(toKebabCase('json-2-xml'))
  .is('json-2-xml')
  .string(toKebabCase('hello--world'))
  .is('hello-world')
  .string(toKebabCase('-person-'))
  .is('-person-')
  .string(toKebabCase('-scuba-squad-'))
  .is('-scuba-squad-')
  .string(toKebabCase('-json-2-xml'))
  .is('-json-2-xml')
  .string(toKebabCase('-hello- -world-'))
  .is('-hello-world-')
  .string(toKebabCase('-person- -'))
  .is('-person-')
  .string(toKebabCase('scuba------squad'))
  .is('scuba-squad')
  .string(toKebabCase('JSON-2-XML'))
  .is('json-2-xml');
```

should return kebab-case for camelCase strings.

```js
unit
  .string(toKebabCase('helloWorld'))
  .is('hello-world')
  .string(toKebabCase('person'))
  .is('person')
  .string(toKebabCase('scubaSquad'))
  .is('scuba-squad')
  .string(toKebabCase('json2Xml'))
  .is('json2xml')
  .string(toKebabCase('json2XML'))
  .is('json2xml');
```

should return kebab-case for PascalCase strings.

```js
unit
  .string(toKebabCase('HelloWorld'))
  .is('hello-world')
  .string(toKebabCase('Person'))
  .is('person')
  .string(toKebabCase('ScubaSquad'))
  .is('scuba-squad')
  .string(toKebabCase('Json2Xml'))
  .is('json2xml')
  .string(toKebabCase('Json2xml'))
  .is('json2xml');
```

should return kebab-case for snake_case strings.

```js
unit
  .string(toKebabCase('hello_world'))
  .is('hello-world')
  .string(toKebabCase('_person'))
  .is('-person')
  .string(toKebabCase('scuba_squad'))
  .is('scuba-squad')
  .string(toKebabCase('json_2_xml'))
  .is('json-2-xml')
  .string(toKebabCase('hello__world'))
  .is('hello-world')
  .string(toKebabCase('_person_'))
  .is('-person-')
  .string(toKebabCase('_scuba_squad_'))
  .is('-scuba-squad-')
  .string(toKebabCase('json_2_XML'))
  .is('json-2-xml')
  .string(toKebabCase('_Hello__World_'))
  .is('-hello-world-')
  .string(toKebabCase('__Person__'))
  .is('-person-')
  .string(toKebabCase('scuba______squad'))
  .is('scuba-squad')
  .string(toKebabCase('JSON_2_XML'))
  .is('json-2-xml');
```

should return kebab-case for delimited strings.

```js
unit
  .string(toKebabCase('hello world'))
  .is('hello-world')
  .string(toKebabCase('is,person'))
  .is('is-person')
  .string(toKebabCase('@scuba-squad/transformation:toKebabCase'))
  .is('-scuba-squad-transformation-to-kebab-case');
```

should return kebab-case for arrays.

```js
unit
  .string(toKebabCase(['hello', 'world']))
  .is('hello-world')
  .string(toKebabCase(['-', 'person']))
  .is('-person')
  .string(toKebabCase(['scuba', 'squad']))
  .is('scuba-squad')
  .string(toKebabCase(['json', 2, 'xml']))
  .is('json-2-xml')
  .string(toKebabCase(['json', 2, 'XML']))
  .is('json-2-xml');
```

<a name="tolines"></a>
# #toLines
should be a function.

```js
unit
  .function(toLines);
```

should return an array with the string for strings without CRLF|CR|LF.

```js
unit
  .array(toLines('123'))
  .is(['123'])
  .array(toLines('asd'))
  .is(['asd']);
```

should return an array with a default joined string for arrays without CRLF|CR|LF.

```js
unit
  .array(toLines(['a', 'b', 'c']))
  .is(['a,b,c']);
```

should return an array of lines for strings with CRLF|CR|LF.

```js
unit
  .array(toLines('a\nb\nc'))
  .is(['a', 'b', 'c'])
  .array(toLines('\n\r\n\n1\r\n\r2'))
  .is([
    '',
    '',
    '',
    '1',
    '',
    '2',
  ]);
```

should return an array of lines for arrays with CRLF|CR|LF.

```js
unit
  .array(toLines(['\na\r\n', '\r5\n']))
  .is([
    '',
    'a',
    ',',
    '5',
    '',
  ]);
```

<a name="tolist"></a>
# #toList
should be a function.

```js
unit.function(toList);
```

should return a string  of value if only 1 value is provided.

```js
unit
  .string(toList([1]))
  .is('1')
  .string(toList('hi'))
  .is('hi');
```

should return a comma seperated list with "and" as the last seperator when called with default options.

```js
unit
  .string(toList([1, 2, 3]))
  .is('1, 2 and 3')
  .string(toList(['big', 'tall']))
  .is('big and tall');
```

should return a delimited list using provided options.

```js
unit
  .string(toList([127, 0, 0, 1], {
    delimiter: '.',
    last: '.',
  }))
  .is('127.0.0.1')
  .string(toList([1, 0, 4, 'beta'], {
    delimiter: '.',
    last: '-',
  }))
  .is('1.0.4-beta');
```

<a name="tolistserial"></a>
# #toListSerial
should be a function.

```js
unit
  .function(toListSerial);
```

should return a string  of value if only 1 value is provided.

```js
unit
  .string(toListSerial([1]))
  .is('1')
  .string(toListSerial('hi'))
  .is('hi');
```

should return a comma seperated list with "and" as the last seperator when called with default options.

```js
unit
  .string(toListSerial([1, 2, 3]))
  .is('1, 2, and 3')
  .string(toListSerial(['big', 'tall']))
  .is('big, and tall');
```

should return a delimited list using provided options.

```js
unit
  .string(toListSerial(['apples', 'oranges', 'bananas'], {
    delimiter: '; ',
  }))
  .is('apples; oranges; and bananas')
  .string(toListSerial(['alpha', 'beta', 'rc', 'release'], {
    delimiter: '-',
    last: '>',
  }))
  .is('alpha-beta-rc->release');
```

<a name="tonumber"></a>
# #toNumber
should be a function.

```js
unit.function(toNumber);
```

should return a number for numbers.

```js
unit
  .number(toNumber(1))
  .is(1)
  .number(toNumber(9.9))
  .is(9.9)
  .number(toNumber(-3.16))
  .is(-3.16)
  .number(toNumber(Number.MAX_VALUE))
  .is(Number.MAX_VALUE)
  .number(toNumber(Number.MIN_VALUE))
  .is(Number.MIN_VALUE);
```

should return a number for booleans.

```js
unit
  .number(toNumber(true))
  .is(1)
  .number(toNumber(false))
  .is(0)
  .number(toNumber(new Boolean(1)))
  .is(1)
  .number(toNumber(new Boolean()))
  .is(0);
```

should return a number for date objects.

```js
unit
  .number(toNumber(new Date()))
  .isBetween(Date.now() - 500, Date.now() + 500)
  .number(toNumber(new Date(500)))
  .is(500);
```

should return a number for parsable strings.

```js
unit
  .number(toNumber('1'))
  .is(1)
  .number(toNumber('9.9'))
  .is(9.9)
  .number(toNumber('-3.16'))
  .is(-3.16)
  .number(toNumber(new String('3.16')))
  .is(3.16);
```

should return a number for empty arrays or arrays with only 1 numberic element.

```js
unit
  .number(toNumber([]))
  .is(0)
  .number(toNumber([1]))
  .is(1)
  .number(toNumber(new Array('-7')))
  .is(-7)
  .number(toNumber(['5']))
  .is(5);
```

should return NaN for NaN.

```js
unit
  .number(toNumber(0 / 0))
  .isNaN();
```

should return Infinity for Infinity.

```js
unit
  .number(toNumber(2e308))
  .isInfinite()
  .number(toNumber(-2e308))
  .isInfinite();
```

should return NaN for unparsable strings.

```js
unit.number(toNumber('asd')).isNaN()
  .number(toNumber('34d'))
  .isNaN()
  .number(toNumber('9.9.3'))
  .isNaN()
  .number(toNumber('-5+6'))
  .isNaN();
```

should return NaN for arrays with more than 1 element or unparsable.

```js
unit
  .number(toNumber([1, 2]))
  .isNaN()
  .number(toNumber(['a']))
  .isNaN()
  .number(toNumber([[4], 7]))
  .isNaN()
  .number(toNumber(new Array('5', 'g')))
  .isNaN();
```

should return NaN for objects that can not be converted.

```js
unit
  .number(toNumber({}))
  .isNaN()
  .number(toNumber({
    a: 5,
  }))
  .isNaN();
```

<a name="topascalcase"></a>
# #toPascalCase
should be a function.

```js
unit
  .function(toPascalCase);
```

should return PascalCase for PascalCase strings.

```js
unit
  .string(toPascalCase('HelloWorld'))
  .is('HelloWorld')
  .string(toPascalCase('Person'))
  .is('Person')
  .string(toPascalCase('ScubaSquad'))
  .is('ScubaSquad')
  .string(toPascalCase('Json2Xml'))
  .is('Json2Xml')
  .string(toPascalCase('Json2xml'))
  .is('Json2xml');
```

should return PascalCase for camelCase strings.

```js
unit
  .string(toPascalCase('helloWorld'))
  .is('HelloWorld')
  .string(toPascalCase('person'))
  .is('Person')
  .string(toPascalCase('scubaSquad'))
  .is('ScubaSquad')
  .string(toPascalCase('json2Xml'))
  .is('Json2Xml')
  .string(toPascalCase('json2XML'))
  .is('Json2XML');
```

should return PascalCase for snake_case strings.

```js
unit
  .string(toPascalCase('hello_world'))
  .is('HelloWorld')
  .string(toPascalCase('_person'))
  .is('Person')
  .string(toPascalCase('scuba_squad'))
  .is('ScubaSquad')
  .string(toPascalCase('json_2_xml'))
  .is('Json2Xml')
  .string(toPascalCase('hello__world'))
  .is('HelloWorld')
  .string(toPascalCase('_person_'))
  .is('Person')
  .string(toPascalCase('_scuba_squad_'))
  .is('ScubaSquad')
  .string(toPascalCase('json_2_XML'))
  .is('Json2XML')
  .string(toPascalCase('_Hello__World_'))
  .is('HelloWorld')
  .string(toPascalCase('__Person__'))
  .is('Person')
  .string(toPascalCase('scuba______squad'))
  .is('ScubaSquad')
  .string(toPascalCase('JSON_2_XML'))
  .is('JSON2XML');
```

should return PascalCase for kebab-case strings.

```js
unit
  .string(toPascalCase('hello-world'))
  .is('HelloWorld')
  .string(toPascalCase('-person'))
  .is('Person')
  .string(toPascalCase('scuba-squad'))
  .is('ScubaSquad')
  .string(toPascalCase('json-2-xml'))
  .is('Json2Xml')
  .string(toPascalCase('hello--world'))
  .is('HelloWorld')
  .string(toPascalCase('-person-'))
  .is('Person')
  .string(toPascalCase('-scuba-squad-'))
  .is('ScubaSquad')
  .string(toPascalCase('-json-2-xml'))
  .is('Json2Xml')
  .string(toPascalCase('-hello- -world-'))
  .is('HelloWorld')
  .string(toPascalCase('-person- -'))
  .is('Person')
  .string(toPascalCase('scuba------squad'))
  .is('ScubaSquad')
  .string(toPascalCase('JSON-2-XML'))
  .is('JSON2XML');
```

should return PascalCase for delimited strings.

```js
unit
  .string(toPascalCase('hello world'))
  .is('HelloWorld')
  .string(toPascalCase('is,person'))
  .is('IsPerson')
  .string(toPascalCase('@scuba-squad/transformation:toPascalCase'))
  .is('ScubaSquadTransformationToPascalCase');
```

should return PascalCase for arrays.

```js
unit
  .string(toPascalCase(['hello', 'world']))
  .is('HelloWorld')
  .string(toPascalCase(['-', 'person']))
  .is('Person')
  .string(toPascalCase(['scuba', 'squad']))
  .is('ScubaSquad')
  .string(toPascalCase(['json', 2, 'xml']))
  .is('Json2Xml')
  .string(toPascalCase(['json', 2, 'XML']))
  .is('Json2XML');
```

<a name="toplural"></a>
# #toPlural
should be a function.

```js
unit
  .function(toPlural);
```

should return a plural version of a word.

```js
unit
  .string(toPlural('table'))
  .is('tables')
  .string(toPlural('chair'))
  .is('chairs')
  .string(toPlural('car'))
  .is('cars')
  .string(toPlural('key'))
  .is('keys');
```

<a name="toregexp"></a>
# #toRegExp
should be a function.

```js
unit.function(toRegExp);
```

should return a RegExp when given a RegExp object.

```js
unit
  .regexp(toRegExp(/asd/i))
  .is(/asd/i)
  .regexp(toRegExp(new RegExp('^hello', 'i')))
  .is(/^hello/i)
  .regexp(toRegExp(/^\d+$/))
  .is(/^\d+$/);
```

should return a RegExp object when given a serialized pcre string.

```js
unit
  .regexp(toRegExp('/asd/i'))
  .is(/asd/i)
  .regexp(toRegExp('%^hello%i'))
  .is(/^hello/i)
  .regexp(toRegExp('|\\d+|g'))
  .is(/\d+/g);
```

should throw an error when given a non-serilized pcre string.

```js
unit
  .error(() => {
    toRegExp('hello');
  })
  .error(() => {
    toRegExp('/asd|i');
  })
  .error(() => {
    toRegExp('/asd/t');
  });
```

<a name="tosingular"></a>
# #toSingular
should be a function.

```js
unit
  .function(toSingular);
```

should return a singular version of a word.

```js
unit
  .string(toSingular('tables'))
  .is('table')
  .string(toSingular('chairs'))
  .is('chair')
  .string(toSingular('cars'))
  .is('car')
  .string(toSingular('keys'))
  .is('key');
```

<a name="toslug"></a>
# #toSlug
should be a function.

```js
unit
  .function(toSlug);
```

should return a slug when given a string.

```js
unit
  .string(toSlug('hello world'))
  .is('hello-world')
  .string(toSlug('helloWorld'))
  .is('hello-World')
  .string(toSlug('＄ vs €'))
  .is('dollar-vs-euro');
```

should return a slug when given an array.

```js
unit
  .string(toSlug(['hello', 'world']))
  .is('hello-world')
  .string(toSlug(['＄', 'vs', '€']))
  .is('dollar-vs-euro');
```

<a name="tosnakecase"></a>
# #toSnakeCase
should be a function.

```js
unit
  .function(toSnakeCase);
```

should return snake_case for snake_case strings.

```js
unit
  .string(toSnakeCase('hello_world'))
  .is('hello_world')
  .string(toSnakeCase('_person'))
  .is('_person')
  .string(toSnakeCase('scuba_squad'))
  .is('scuba_squad')
  .string(toSnakeCase('json_2_xml'))
  .is('json_2_xml')
  .string(toSnakeCase('hello__world'))
  .is('hello_world')
  .string(toSnakeCase('_person_'))
  .is('_person_')
  .string(toSnakeCase('_scuba_squad_'))
  .is('_scuba_squad_')
  .string(toSnakeCase('json_2_XML'))
  .is('json_2_xml')
  .string(toSnakeCase('_Hello__World_'))
  .is('_hello_world_')
  .string(toSnakeCase('__Person__'))
  .is('_person_')
  .string(toSnakeCase('scuba______squad'))
  .is('scuba_squad')
  .string(toSnakeCase('JSON_2_XML'))
  .is('json_2_xml');
```

should return snake_case for kebab-case strings.

```js
unit
  .string(toSnakeCase('hello-world'))
  .is('hello_world')
  .string(toSnakeCase('-person'))
  .is('_person')
  .string(toSnakeCase('scuba-squad'))
  .is('scuba_squad')
  .string(toSnakeCase('json-2-xml'))
  .is('json_2_xml')
  .string(toSnakeCase('hello--world'))
  .is('hello_world')
  .string(toSnakeCase('-person-'))
  .is('_person_')
  .string(toSnakeCase('-scuba-squad-'))
  .is('_scuba_squad_')
  .string(toSnakeCase('-json-2-xml'))
  .is('_json_2_xml')
  .string(toSnakeCase('-hello- -world-'))
  .is('_hello_world_')
  .string(toSnakeCase('-person- -'))
  .is('_person_')
  .string(toSnakeCase('scuba------squad'))
  .is('scuba_squad')
  .string(toSnakeCase('JSON-2-XML'))
  .is('json_2_xml');
```

should return snake_case for camelCase strings.

```js
unit
  .string(toSnakeCase('helloWorld'))
  .is('hello_world')
  .string(toSnakeCase('person'))
  .is('person')
  .string(toSnakeCase('scubaSquad'))
  .is('scuba_squad')
  .string(toSnakeCase('json2Xml'))
  .is('json2xml')
  .string(toSnakeCase('json2XML'))
  .is('json2xml');
```

should return snake_case for PascalCase strings.

```js
unit
  .string(toSnakeCase('HelloWorld'))
  .is('hello_world')
  .string(toSnakeCase('Person'))
  .is('person')
  .string(toSnakeCase('ScubaSquad'))
  .is('scuba_squad')
  .string(toSnakeCase('Json2Xml'))
  .is('json2xml')
  .string(toSnakeCase('Json2xml'))
  .is('json2xml');
```

should return snake_case for delimited strings.

```js
unit
  .string(toSnakeCase('hello world'))
  .is('hello_world')
  .string(toSnakeCase('is,person'))
  .is('is_person')
  .string(toSnakeCase('@scuba_squad/transformation:toSnakeCase'))
  .is('_scuba_squad_transformation_to_snake_case');
```

should return snake_case for arrays.

```js
unit
  .string(toSnakeCase(['hello', 'world']))
  .is('hello_world')
  .string(toSnakeCase(['-', 'person']))
  .is('_person')
  .string(toSnakeCase(['scuba', 'squad']))
  .is('scuba_squad')
  .string(toSnakeCase(['json', 2, 'xml']))
  .is('json_2_xml')
  .string(toSnakeCase(['json', 2, 'XML']))
  .is('json_2_xml');
```

<a name="tostring"></a>
# #toString
should be a function.

```js
unit
  .function(toString);
```

should return a string.

```js
unit
  .string(toString([1, 2, 3]))
  .is('1,2,3')
  .string(toString({a: 5}))
  .is('[object Object]')
  .string(toString(Object.create(null)))
  .is('');
```

<a name="totokens"></a>
# #toTokens
should be a function.

```js
unit
  .function(toTokens);
```

should return an array of strings when given no options.

```js
unit
  .array(toTokens('hello world!'))
  .is(['hello', 'world!'])
  .array(toTokens('123 Main St.'))
  .is(['123', 'Main', 'St.'])
  .array(toTokens('this is $1.00'))
  .is(['this', 'is', '$1.00'])
  .array(toTokens('a,b,c'))
  .is(['a,b,c'])
  .array(toTokens('fruit: apples, oranges, bananas'))
  .is(['fruit:', 'apples,', 'oranges,', 'bananas'])
  .array(toTokens('one'))
  .is(['one'])
  .array(toTokens(''))
  .is(['']);
```

should return an array of strings split on the provided token.

```js
const token = /\W+/;
unit
  .array(toTokens('hello world!', token))
  .is(['hello', 'world', ''])
  .array(toTokens('123 Main St.', token))
  .is(['123', 'Main', 'St', ''])
  .array(toTokens('this is $1.00', token))
  .is(['this', 'is', '1', '00'])
  .array(toTokens('a,b,c', token))
  .is(['a', 'b', 'c'])
  .array(toTokens('fruit: apples, oranges, bananas', token))
  .is(['fruit', 'apples', 'oranges', 'bananas'])
  .array(toTokens('one', token))
  .is(['one'])
  .array(toTokens('', token))
  .is(['']);
```

<a name="towords"></a>
# #toWords
should be a function.

```js
unit
  .function(toWords);
```

should return an array of words in a string.

```js
unit
  .array(toWords('hello world!'))
  .is(['hello', 'world!'])
  .array(toWords('123 Main St.'))
  .is(['123', 'Main', 'St.'])
  .array(toWords('this is $1.00'))
  .is(['this', 'is', '$1.00'])
  .array(toWords('a,b,c'))
  .is(['a', 'b', 'c'])
  .array(toWords('fruit: apples, oranges, bananas'))
  .is(['fruit', 'apples', 'oranges', 'bananas'])
  .array(toWords('one'))
  .is(['one'])
  .array(toWords(''))
  .is(['']);
```

<a name="towrap"></a>
# #toWrap
should be a function.

```js
unit
  .function(toWrap);
```

should return a string of value when no options are provided.

```js
unit
  .string(toWrap('hello'))
  .is('hello')
  .string(toWrap(/asd/i))
  .is('/asd/i')
  .string(toWrap(Symbol('no')))
  .is('Symbol(no)');
```

should return a string enclosing value with provided options.

```js
unit
  .string(toWrap('hello', {
    start: '"',
    end: '?"',
  }))
  .is('"hello?"')
  .string(toWrap('tag', {
    start: '<',
    end: '>',
  }))
  .is('<tag>')
  .string(toWrap('find me', {
    start: '/',
    end: '/i',
  }))
  .is('/find me/i')
  .string(toWrap([1, 2, 3], {
    start: '[',
    end: ']',
  }))
  .is('[1,2,3]')
  .string(toWrap([1, 2, 3], {
    start: '(',
    end: ')',
  }))
  .is('(1,2,3)');
```

should return a string enclosing value with option provided when only 1 is set.

```js
unit
  .string(toWrap('hello', {
    start: '"',
  }))
  .is('"hello"')
  .string(toWrap('hello', {
    end: '/',
  }))
  .is('/hello/')
  .string(toWrap(true, {
    start: '-',
  }))
  .is('-true-')
  .string(toWrap('italics', {
    end: '*',
  }))
  .is('*italics*');
```

<a name="toxml"></a>
# #toXML
should be a function.

```js
unit
  .function(toXML);
```

should return an xml string for an object.

```js
const test = {
  firstName: 'James',
  lastName: 'Bond',
  age: 55,
};
const regex = /^\s*<(firstName)>James<\/\1>\s*<(lastName)>Bond<\/\2>\s*<(age)>55<\/\3>\s*$/m;
unit
  .string(toXML(test))
  .match(regex);
```

<a name="toyaml"></a>
# #toYAML
should be a function.

```js
unit
  .function(toYAML);
```

should return a yaml string for an object.

```js
const test = {
  firstName: 'James',
  lastName: 'Bond',
  age: 55,
};
const regex = /^\s*firstName\s*:\s*James\s*\s*lastName\s*:\s*Bond\s*\s*age\s*:\s*55\s*$/m;
unit
  .string(toYAML(test))
  .match(regex);
```

