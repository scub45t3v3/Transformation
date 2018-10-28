'use strict';

(() => {
  // include dependencies
  const unit = require('unit.js');
  const toArray = require('../toArray');

  describe('#toArray', () => {
    it('should be a function', () => {
      unit
        .function(toArray);
    }); // end it

    it('should return an empty array for undefined and null', () => {
      unit
        .array(toArray())
        .is([])
        .array(toArray(null))
        .is([]);
    }); // end it

    it('should return an array for an array', () => {
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
    }); // end it

    it('should return an array for a Set', () => {
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
    }); // end it

    it('should return an array for a Map', () => {
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
    }); // end it

    it('should return an array for an object', () => {
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
    }); // end it

    it('should return an array for a string', () => {
      unit
        .array(toArray('hello world'))
        .is(['hello', 'world'])
        .array(toArray('bye'))
        .is(['bye']);
    }); // end it

    it('should return a single-dimensional array for multi-dimensional when given the flatten opt', () => {
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
    }); // end it
  }); // end describe #toArray
})(); // end IIFE