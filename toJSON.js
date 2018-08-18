'use strict';

(() => {
  const toJSON = (value, space = 2) => {
    return JSON.stringify(value, null, space);
  };

  // export toJSON as commonjs module
  module.exports = toJSON;
})(); // end IIFE