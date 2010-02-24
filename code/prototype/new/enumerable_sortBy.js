/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
['hello', 'world', 'this', 'is', 'nice'].sortBy(function(s) {
  return s.length;
})
// -> 'is', 'this', 'nice', 'hello', 'world']

['hello', 'world', 'this', 'is', 'cool'].sortBy(function(s) {
  var md = s.match(/[aeiouy]/g);
  return null == md ? 0 : md.length;
  // 100% Prototypish: return (md || []).length;
})
// -> [ 'world', 'this', 'is', 'hello', 'cool'] (sorted by vowel count)
