/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
// Assuming a <div> with ID 'navbar' and a 'nonPrint' CSS class...
var data = ["hello\nworld!", false, null, , " ", 42, $('navBar'), "\n"];
alert(Object.inspect(data));
