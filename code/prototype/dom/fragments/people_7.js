/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
function handleTreeClick(e) {
  var elt = e.element();
  if (elt.tagName == 'INPUT')
    return;
  e.stop();
  if (elt.tagName == 'IMG')
    elt = elt.up('a');
  if (elt.tagName == 'A') {
    // Some toggle code, coming soon!
    return;
  }
  // Other click.  Let's select if we're on a valid item!
  if ('LI' != elt.tagName) 
    elt = elt.up('li');
  if (!elt)
    return;
  Staff.select(elt.id);
} // handleTreeClick

// processForm...

document.observe('dom:loaded', function() {
  Staff.init();
  Staff.updateEditor();
  $('tree').observe('click', handleTreeClick);
  $('editor').observe('submit', processForm);
  $('btnAddChild').observe('click',
    processForm.bindAsEventListener(this, true));
  new Field.Observer('edtName', 0.3, function() { 
    $('btnSubmit').disabled = $F('edtName').blank();
  });
});
