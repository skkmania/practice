/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
// "I haven't read the whole doc on $()"
var items = [];
items[0] = $('navbar');
items[1] = $('adbar');
items[2] = $('footer');

// "I sure did!"
var items = $('navbar', 'adbar', 'footer');
