/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
var lib = $H({ version: 1.5, author: 'Sam Stephenson' });
lib.each(function(pair) {
  alert(pair.key + ' = "' + pair.value + '"');
});
// Alerts, in non-guaranteed order, 'version = "1.5"' and
// 'author = "Sam Stephenson"'.
