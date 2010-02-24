/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
document.observe('dom:loaded', function() {
  $('userForm').observe('submit', function(e) {
    e.stop();
    var updater = new Ajax.Updater('feedback', '/user/update', {
      parameters: $('userForm').serialize(),
      onComplete: function() {
        if (updater.getHeader('X-Status') == 'error') {
          $('feedback').morph('errors');
          new Effect.Pulsate('feedback', { queue: 'end' });
        }
      }
    });
  });
});
