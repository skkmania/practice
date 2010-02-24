/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
var Displayer = {
  intro: 'Received click event: ',

  display: function() {
    alert($A(arguments).inspect());
  }
};

document.observe('click', Displayer.display.bind(Displayer));
document.observe('click', Displayer.display.bind(Displayer, 42));

// Clicking on the doc will yield the two following alert strings
// in Firefox:
// 1. "[[object MouseEvent]]"
// 2. "[42, [object MouseEvent]]"
