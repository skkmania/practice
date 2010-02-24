/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
document.observe('dom:loaded', function() {
  $$('.product').each(function(book) {
    new Draggable(book, { revert: true });
  });
  Droppables.add('cart', {
    accept: 'product', hoverclass: 'dropAllowed',
    onDrop: function(book) {
      var bought = new Element('img');
      bought.src = book.readAttribute('src').replace('.', '_tiny.');
      new Draggable(bought, { revert: true });
      $('cart').appendChild(bought);
    }
  });
  Droppables.add('trash', {
    containment: 'cart', hoverclass: 'readyToTrash',
    onDrop: function(bought) {
      bought.remove();
    }
  });
});
