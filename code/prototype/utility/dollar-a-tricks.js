/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
$A($R(1, 10))
// -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// OK, playing with the cool kids now...

var names = ['Amir', 'Arnaud', 'Stéphane', 'Sunny', 'Tobie'];
$A($R(1, names.length)).zip(names, function(a) { return a.join('. '); })
// -> ['1. Amir', '2. Arnaud', '3. Stéphane', '4. Sunny', '5. Tobie']
