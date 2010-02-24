/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
Array.from === $A
// -> true

Array.from('hello')
// -> ['h', 'e', 'l', 'l', 'o']

$A({0: 'What kind', 1: 'of twisted', 2: 'example is this?', length: 3})
// [ 'What kind', 'of twisted', 'example is this?']

[42, 'hello', Number.POSITIVE_INFINITY, []].inspect()
// -> "[42, 'hello', Infinity, []]"
