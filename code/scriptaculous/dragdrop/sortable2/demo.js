/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
document.observe('dom:loaded', function() {
  var changeEffect;
  Sortable.create('guys', {
    onChange: function(item) {
      var list = Sortable.options(item).element; 
      $('changeNotification').update(Sortable.serialize(list).escapeHTML());
      if (changeEffect) changeEffect.cancel();
      changeEffect = new Effect.Highlight('changeNotification',
        { restorecolor: 'transparent' });
    },
    onUpdate: function(list) {
      $('updateNotification').update(Sortable.serialize(list).escapeHTML());
      $('updateNotification').highlight({ startcolor: '#99ff99' });
    }
  });
});
