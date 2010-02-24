/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
// An optimal naive-class (i.e. not requiring a Math Ph.D. and 50+ lines of
// code) deterministic prime detection method, slightly compacted.
function isPrime(n) {
  if (2 > n) return false;
  if (0 == n % 2) return (2 == n);
  for (var index = 3; n / index > index; index += 2)
    if (0 == n % index) return false;
  return true;
} // isPrime

$R(10,15).find(isPrime)
// -> 11

['hello', 'world', 'this', 'is', 'nice'].find(function(s) {
  return s.length <= 3;
})
// -> 'is'

$R(1, 10).findAll(function(n) { return 0 == n % 2; })
// -> [2, 4, 6, 8, 10]

['hello', 'world', 'this', 'is', 'nice'].findAll(function(s) {
  return s.length >= 5;
})
// -> ['hello', 'world']
