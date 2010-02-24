/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
['hello', null, 42, false, true, , 17].partition()
// -> [['hello', 42, true, 17], [null, false, undefined]]

$R(1, 10).partition(function(n) {
  return 0 == n % 2;
})
// -> [[2, 4, 6, 8, 10], [1, 3, 5, 7, 9]]
