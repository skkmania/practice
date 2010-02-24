/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
(5).times(function() { alert("Isn't this annoying?"); });

// With anything that is not a literal number, you don't need the extra
// parentheses:
var count = parseInt($F('soundCount'), 10);
count.times(playSound);
