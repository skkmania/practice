/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
var easy = [42, 'Hey', NaN, 'fellas', null, "What's up?"];
var harder = [42, ['Hey', [NaN], 'fellas'], null, [[["What's up?"]]]];

easy.reverse()
// easy: ["What's up?", null, 'fellas', NaN, 'Hey', 42]
easy.reverse(false)
// -> [42, 'Hey', NaN, 'fellas', null, "What's up?"]
// easy: ["What's up?", null, 'fellas', NaN, 'Hey', 42]

var easy2 = harder.flatten()
// -> [42, 'Hey', NaN, 'fellas', null, "What's up?"]

easy2 = easy2.without(NaN, 'fellas').compact()
// -> [42, 'Hey', NaN, "What's up?"] // Remember NaN != NaN...

easy2.clear()
// easy2: []

[].reduce()        // -> undefined
[1].reduce()       // -> 1
[1, 2, 3].reduce() // -> [1, 2, 3]

[1, 2, 3, 7, 2, 5, 7, 4, 8].uniq()
// -> [1, 2, 3, 7, 5, 4, 8]
