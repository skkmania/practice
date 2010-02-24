/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
document.observe('dom:loaded', function() {
  $('demos').observe('click', handleDemoClick);
  $('demos').select('td:nth-child(2n)').invoke('setStyle', { background: '#ddd' });
});

function handleDemoClick(e) {
	e.stop();
  var elt = e.element();
  if (elt.tagName.toLowerCase() != 'input' || elt.type != 'button')
    return;
  elt.disable();
  var code = elt.up('td').previous().down('pre').firstChild.nodeValue;
  code = code.replace(/^\s*\/\/.*$/mg, '');
  var output = elt.up('td').next();
  output.update('');
  var elt = eval(code);
  output.appendChild(elt);
  output.highlight();
}
