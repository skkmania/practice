/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
// Staff...

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
