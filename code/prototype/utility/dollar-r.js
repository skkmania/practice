/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
$R(1,5).each(function(n) {
  // Gets invoked 5 times, with n from 1 to 5
});

$A($R(1, 7))
// -> [1, 2, 3, 4, 5, 6, 7]

$R(1, 10).findAll(function(n) {
  return 0 != n % 2;
})
// -> [1, 3, 5, 7, 9]
