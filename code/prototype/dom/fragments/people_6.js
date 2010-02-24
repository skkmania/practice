/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
var Staff = {
  // templates, nodes, createDOMFragment...

  find: function(id, nodes) { 
    nodes = nodes || this.nodes;
    var result;
    nodes.each(function(n) {
      result = n.id == id ? n : n.children && this.find(id, n.children);
      if (result)
        throw $break;
    }.bind(this));
    return result;
  },

  // genId, init...

  select: function(id) { 
    if (this.selected)
      $(this.selected.id).down('span').removeClassName('selected');
    this.selected = (this.selected && this.selected.id == id
      ? null : this.find(id));
    if (this.selected) {
      var elt = $(id);
      elt.down('span').addClassName('selected');
    }
    this.updateEditor();
    return this.selected;
  },

  update: function() {
    // ...
  },

  updateEditor: function() { 
    if (!this.selected) {
      $('edtName').value = '';
      $('chkIsGroup').enable().checked = false;
      $('btnSubmit').value = 'Create';
      $('btnRemove', 'btnAddChild', 'btnSubmit').invoke('disable');
    } else {
      $('edtName').value = this.selected.name;
      var isGroup = this.selected.children;
      $('chkIsGroup').checked = isGroup;
      $('btnSubmit').value = 'Rename';
      $('btnRemove').enable();
      $('btnAddChild', 'chkIsGroup').invoke(
        isGroup ? 'enable' : 'disable');
    }
    $('edtName').activate();
  }
}; // Staff
