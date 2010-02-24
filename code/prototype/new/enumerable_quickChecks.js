/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/

// Are there only numbers in there?
[1, 2, 3, '4', 'hello'].all(function(item) {
  return 'number' == typeof item;
})
// -> false (ticks on '4', stops right there)

// Only higher percentiles?
[92, 97, 90, 98].all(function(grade) { return grade >= 90; })
// -> true (kick-ass class!)

var nodes = $('topBar', 'menuBar', 'navBar', 'footer');
// Found any of those?
if (nodes.any())
  // whatever...



$R(1, 20).include(12)
// -> true
$R(1, 20).include('20')
// -> true (20 == '20')
$A(document.childNodes).member(document.body)
// -> false (not so fast, son!)
$R(5, 20).size()
// -> 16
