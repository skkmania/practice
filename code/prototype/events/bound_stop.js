/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
var Displayer = {
  count: 0,

  display: function(e) {
    if (++this.count >= 3)
      document.stopObserving('click', this.display.bind(this));
    alert('Received click event: ' + e + ' (' + this.count + ')');
  }
};

document.observe('click', Displayer.display.bind(Displayer));
