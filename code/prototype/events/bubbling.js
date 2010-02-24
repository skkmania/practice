/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
function showEvent(e, reg) {
  alert(e.type + ' from ' + Event.element(e).tagName + ' (' + reg + ')');
}

document.observe('dom:loaded', function() {
  document.observe('click', showEvent.bindAsEventListener(this, 'doc'));
  $('bubbler').observe('click', showEvent.bindAsEventListener(this,
    'bubbler'));
});
