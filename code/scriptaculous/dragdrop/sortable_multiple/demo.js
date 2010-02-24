/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
document.observe('dom:loaded', function() {
  var options = {
    constraint: false, containment: ['paris', 'world'],
    dropOnEmpty: true, onUpdate: function(list) {
      var methodStart = list.down('li') ? 'remove' : 'add';
      list[methodStart + 'ClassName']('empty');
    }
  };
  Sortable.create('paris', options);
  Sortable.create('world', options);
});
