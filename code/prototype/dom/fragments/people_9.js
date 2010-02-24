/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
var Staff = {
  // ...

  createDOMFragment: function(parentId, node) {
    // ...
    element.down('input').checked = node.checked;
    this.makeVisible(node.id); 
    return node;
  },

  // find, genId, init

  makeVisible: function(id) { 
    var elt = $(id);
    // Open all containing groups
    while (elt = elt.up('ul'))
      if (!elt.visible())
        this.toggle(elt.up('li').id);
  },

  // removeSelected

  select: function(id) {
    // ...
    if (this.selected) {
      var elt = $(id);
      elt.down('span').addClassName('selected');
      this.makeVisible(id); 
    }
    // ...
  },

  toggle: function(id) { 
    var elt = $(id);
    var group = elt.down('ul');
    var toggler = elt.down('img');
    var groupIsVisible = group.toggle().visible();
    toggler.src = 'group_' + (groupIsVisible ? 'open' : 'closed') +
      '.gif';
    toggler.alt = (groupIsVisible ? '-' : '+');
    toggler.up('a').title = 'Click to ' +
      (groupIsVisible ? 'collapse' : 'expand');
  },

  // update, updateEditor
}; // Staff

function handleTreeClick(e) {
  // ...
  if (elt.tagName == 'A') {
    Staff.toggle(elt.up('li').id); 
    return;
  }
  // ...
} // handleTreeClick

// ...
