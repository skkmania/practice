/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
document.observe('dom:loaded', function() {
  new Ajax.InPlaceEditor('freeZone1', '/update', {
    hoverClassName: 'hovered', formClassName: 'first'
  });
  new Ajax.InPlaceEditor('freeZone2', '/update', {
    hoverClassName: 'hovered'
  });
  new Ajax.InPlaceEditor('freeZone3', '/update', {
    hoverClassName: 'hovered'
  });
  new Ajax.InPlaceEditor('freeZone4', '/update', {
    hoverClassName: 'hovered',
    savingText: 'Hang on, I\'m saving this...'
  });
});
