/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
['hello', 'world', 'this', 'is', 'nice'].inject([],
  function(array, value, index) {
    if (0 == index % 2)
      array.push(value);
    return array;
  })
// -> ['hello', 'this', 'nice']

// Note how we actually use references:

var array1 = [];
var array2 = [1, 2, 3].inject(array1, function(array, value) {
  array.push(value * value);
  return array;
});
array2
// -> [1, 4, 9]
array1
// -> [1, 4, 9]
array2.push(16);
array1
// -> [1, 4, 9, 16]
