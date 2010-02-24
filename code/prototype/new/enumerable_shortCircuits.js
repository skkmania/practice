/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
// This could be done better with an accumulator using inject, but humor me
// here...
var result = [];
$R(1,10).each(function(n) {
  if (0 == n % 2)
    return;
  if (n > 6)
    throw $break;
  result.push(n);
});
// result -> [1, 3, 5]
