/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
'Sam Stephenson\nThomas \'madrobby\' Fuchs'.inspect()
// -> "'Sam Stephenson\\nThomas \\'madrobby\\' Fuchs'"

'Sam Stephenson\nThomas \'madrobby\' Fuchs'.inspect(true)
// -> "\"Sam Stephenson\\nThomas 'madrobby' Fuchs\""

'hello'.toArray()
// -> ['h', 'e', 'l', 'l', 'o']

$A('hello')
// -> ['h', 'e', 'l', 'l', 'o']

var query = '?login=tdd&age=29&country=FR';
query.parseQuery()
// -> { login: 'tdd', age: '29', country: 'FR' }
