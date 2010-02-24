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
    cancelControl: 'button' });
  new Ajax.InPlaceEditor('freeZone2', '/update', {
    okControl: 'link', textBetweenControls: ' '
  });
  new Ajax.InPlaceEditor('freeZone3', '/update', {
    textBeforeControls: '[ ', textBetweenControls: ' - ',
    textAfterControls: ' ]'
  });
  new Ajax.InPlaceEditor('freeZone4', '/update', {
    clickToEditText: 'You\'d better click on this!',
    savingText: 'Hang on a second, I\'m saving this...'
  });
});
