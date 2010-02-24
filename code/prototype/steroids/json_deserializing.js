/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
'[1, 2, 3]'.evalJSON()
// => [1, 2, 3]

var doudou = '{"first": "Élodie", "last": "Jaubert"}'.evalJSON();
doudou.first
// => 'Élodie'
doudou.last
// => 'Jaubert'
