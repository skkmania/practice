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
      '<input type="checkbox" name="item[]" value="#{id}" /><span>#{name}</span></span>'),
    group: new Template(
      '<span class="group">' +
      '<a href="" title="Click to collapse">' +
      '<img class="toggler" src="group_open.gif" alt="-" /></a>' +
      '<input type="checkbox" name="item[]" value="#{id}" /><span>#{name}</span></span>' +
      '<ul></ul>')
  },

  _currentId: 1000,

  selected: null,

  nodes: [
    { id: 'item1', name: 'ACME',
      children: [
        { id: 'item11', name: 'IT',
          children: [
            { id: 'item111', name: 'Sébastien Gruhier' },
            { id: 'item112', name: 'Alexis Jaubert' },
            { id: 'item113', name: 'Guillaume Réan' }
          ] },
        { id: 'item12', name: 'HR',
          children: [
            { id: 'item121', name: 'Sandrine Daspet' }
          ] },
        { id: 'item13', name: 'Xavier Borderie' }
      ] }
  ],

  create: function(name, isGroup) {
    var container = this.selected ? this.selected.children : this.nodes;
    var node = { id: 'item' + this.genId(), name: name, container: container };
    if (isGroup)
      node.children = [];
    container.push(node);
    return this.createDOMFragment(
      this.selected ? this.selected.id : 'staff', node);
  },

  createDOMFragment: function(parentId, node) {
    var element = $(document.createElement('li'));
    element.id = node.id;
    var tpl = this._templates[node.children ? 'group' : 'person'];
    var escapedNode = { id: node.id, name: node.name.escapeHTML() };
    element.update(tpl.evaluate(escapedNode));
    $(parentId).down('ul').appendChild(element);
    element.down('input').checked = node.checked;
    return node;
  },

  genId: function() {
    return ++this._currentId;
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
  },

  update: function() {
    this.selected.label = $F('edtName');
    $(this.selected.id).down('span', 1).update(
      this.selected.label.escapeHTML());
  }
}; // Staff

function processForm(e, addChild) {
  e.stop();
  if (Staff.selected && !addChild)
    Staff.update($F('edtName'));
  else
    Staff.create($F('edtName'), $('chkIsGroup').checked);
} // processForm

document.observe('dom:loaded', function() {
  Staff.init();
  $('editor').observe('submit', processForm);
  $('btnAddChild').observe('click',
    processForm.bindAsEventListener(this, true));
});
