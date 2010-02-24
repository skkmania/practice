/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
$R(1,10).inject(0, function(acc, n) { return acc + n; })
// -> 55 (sum of 1 to 10)

$R(2,5).inject(1, function(acc, n) { return acc * n; })
// -> 120 (factorial 5)
