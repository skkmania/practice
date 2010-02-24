/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
var Staff = {
  // everything up to init...

  removeSelected: function() {
    if (!this.selected)
      throw 'No selection to remove';
    var container = this.selected.container;
    container = container.without(this.selected);
    var elt = $(this.selected.id);
    var previous = elt.previous('li');
    if (!previous)
      previous = elt.up('li');
    elt.remove();
    this.selected = null;
    if (previous)
      this.select(previous.id);
    else
      this.updateEditor();
  },

  // select, update...
}; // Staff

// ...

document.observe('dom:loaded', function() {
  // ...
  $('btnRemove').observe('click', Staff.removeSelected.bind(Staff));
  // ...
});
