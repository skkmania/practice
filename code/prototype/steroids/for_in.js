/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
var arr = ['hello', 'world'];
var props = [];
for (var prop in arr)
  props.push(prop);

// Without extensions to Array.prototype:
// -> ['0', '1']

// With Prototype's extensions:
// -> ['0', '1', 'each', 'eachSlice', 'all', ..., 'clone'] (38 items)
