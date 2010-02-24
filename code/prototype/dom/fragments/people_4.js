/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
var Staff = {
  // _templates...

  _currentId: 1000,

  selected: null,

  // nodes...

  create: function(name, isGroup) {
    var container = this.selected ? this.selected.children : this.nodes;
    var node = { id: 'item' + this.genId(), name: name,
      container: container };
    if (isGroup)
      node.children = [];
    container.push(node);
    return this.createDOMFragment(
      this.selected ? this.selected.id : 'staff', node);
  },

  // createDOMFragment...

  genId: function() {
    return ++this._currentId;
  },

  init: function() {
    // ...
  },

  update: function() {
    this.selected.label = $F('edtName');
    $(this.selected.id).down('span', 1).update(
      this.selected.label.escapeHTML());
  }
}; // Staff
