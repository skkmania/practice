/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
[].first()
// -> undefined

[1, 2, 3].first()
// -> 1

[].last()
// -> undefined

[1, 2, 3].last()
// -> 3

['Hey', 'fellas', "What's up?"].indexOf('fellas')
// -> 1

['Hey', 'fellas', "What's up?"].indexOf('Fellas')
// -> -1 (String == String is case-sensitive)

[0, 1, 2, 3].indexOf('')
// -> 0 (0 == '')
