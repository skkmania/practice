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
  },

  init: function(id, nodes) {
    id = id || 'staff'; 
    nodes = nodes || this.nodes;
    nodes.each(function(n) {
      n.container = nodes; 
      this.createDOMFragment(id, n);
      if (n.children)
        this.init(n.id, n.children);
    }.bind(this)); 
  }
}; // Staff
