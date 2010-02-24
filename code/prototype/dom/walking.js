/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
$('item1').up()            // => #list
$('item1').up(1)           // => body
$('item1').up().previous() // => #title
$('item1').next()          // => #item2
$('item1').previous()      // => undefined
$('item1').down()          // => undefined
$('item2').down()          // => #p2_1
$('list').down('p')        // => #p2_1
$('list').down('p', 1)     // => #p2_2
