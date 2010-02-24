/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
var Staff = {
  _templates: {
    person: new Template(
      '<span class="person">' +
      '<input type="checkbox" name="item[]" value="#{id}" />' +
      '<span>#{name}</span></span>'),
    group: new Template(
      '<span class="group">' +
      '<a href="" title="Click to collapse">' +
      '<img class="toggler" src="group_open.gif" alt="-" /></a>' +
      '<input type="checkbox" name="item[]" value="#{id}" />' +
      '<span>#{name}</span></span>' +
      '<ul></ul>')
  },

  nodes: [
    // ...
  ],

  createDOMFragment: function(parentId, node) { 
    var element = $(document.createElement('li'));
    element.id = node.id;
    var tpl = this._templates[node.children ? 'group' : 'person']; 
    var escapedNode = { id: node.id, name: node.name.escapeHTML() }; 
    element.update(tpl.evaluate(escapedNode)); 
    $(parentId).down('ul').appendChild(element);
    element.down('input').checked = node.checked; 
    return node;
  }
}; // Staff
