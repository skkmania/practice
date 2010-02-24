/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
function showCoords(elt) {
  var data = [ 'cumulative', 'cumulativeScroll', 'positioned', 'viewport' ];
  var html = '';
  data.each(function(method) {
    var info = elt[method + 'Offset']();
    html += method + ': [' + info.join(', ') + ']<br/>';
  });
  $('coords').update(html);
}

Event.observe(window, 'mouseover', function(e) {
  var elt = e.element();
  if (!elt.hasClassName('pad'))
    return;
  e.stop();
  showCoords(elt);
});
