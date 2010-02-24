/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
// Get all strings with a repeated letter somewhere
['hello', 'world', 'this', 'is', 'cool'].grep(/(.)\1/)
// -> ['hello', 'cool']

// Get all numbers ending with 0 or 5!
$R(1,30).grep(/[05]$/)
// -> [5, 10, 15, 20, 25, 30]

// Those, minus 1
$R(1,30).grep(/[05]$/, function(n) { return n - 1; })
// -> [4, 9, 14, 19, 24, 29]
