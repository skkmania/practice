/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
// Using the regular types
var paras = document.getElementsByTagName('p');
for (var index = 0; index < paras.length; ++index)
  Element.hide(paras.item(index));
Element.update(paras.item(paras.length - 1), 'Jeez that is verbose');

// The Prototype way (nonextending version, though)
var paras = $A(document.getElementsByTagName('p'));
paras.each(Element.hide);
Element.update(paras.last(), 'This looks better');
