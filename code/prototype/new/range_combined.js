/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
$A($R(1, 5)).join(', ')
// -> '1, 2, 3, 4, 5'

$R(1, 5).zip(['one', 'two', 'three', 'four', 'five'], function(tuple) {
  return tuple.join(' = ');
})
// -> ['1 = one', '2 = two', '3 = three', '4 = four', '5 = five']

$A($R('a', 'e'))
// -> ['a', 'b', 'c', 'd', 'e'], no surprise there

$A($R('ax', 'ba'))
// -> Ouch!  Humongous array, starting as
//    ['ax', 'ay', 'az', 'a{', 'a|', 'a}', 'a~'...]
