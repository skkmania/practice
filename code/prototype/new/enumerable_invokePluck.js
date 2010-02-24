/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
['hello', 'world', 'cool!'].invoke('toUpperCase')
// ['HELLO', 'WORLD', 'COOL!']

['hello', 'world', 'cool!'].invoke('substring', 0, 3)
// ['hel', 'wor', 'coo']

// Of course, this works on Prototype extensions (why shouldn't it?!)
$('navBar', 'adsBar', 'footer').invoke('hide')

['hello', 'world', 'this', 'is', 'nice'].pluck('length')
// -> [5, 5, 4, 2, 4]

$$('.cool').pluck('tagName').sort().uniq(true)
// -> sorted list of unique canonical tag names for elements with this
// specific CSS class...
