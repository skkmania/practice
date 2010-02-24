/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
function bindUI() { 
  $('addForm').observe('submit', routeToAJAX);
  $('selectAll').observe('click', 
    toggleAll.bindAsEventListener(this, true)); 
  $('deselectAll').observe('click',
    toggleAll.bindAsEventListener(this, false));
} // bindUI

function toggleAll(event, doSelect) {
  event.stop();
  $('tasks').select('input[type=checkbox]').each(function(box) { 
    box.checked = doSelect;
  });
} // toggleAll

Ajax.Responders.register({ 
  onCreate: function() {
    $('progress').show();
  },
  onComplete: function() {
    if (0 == Ajax.activeRequestCount)
      $('progress').hide();
  }
});

function routeToAJAX(event) {
  event.stop();
  var form = event.element();
  new Ajax.Updater('tasks', form.action, { 
    parameters: Form.serialize(form),
    insertion: 'bottom',
    onLoading: function() { $('addForm').disable(); },
    onComplete: function() {
      $('addForm').enable();
      $('taskText').clear().focus();
    }
  });
} // routeToAJAX

document.observe('dom:loaded', bindUI);
