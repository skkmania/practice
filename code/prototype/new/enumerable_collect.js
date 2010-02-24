/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
['Hitch', "Hiker's", 'Guide', 'To', 'The', 'Galaxy'].collect(
  function(s) {
    return s.charAt(0).toUpperCase();
  }).join('')
// -> 'HHGTTG'

$R(1,5).map(function(n) {
  return n * n;
})
// -> [1, 4, 9, 16, 25]
