/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
var people = [
  { name: 'Bill Gates', style: 'ASP' },
  { name: 'Andrew Dupont', style: 'Ruby' }
];

var ASP_SYNTAX = /(^|.|\r|\n)(<%=\s*(\w+)\s*=>)/;
var tpl = new Template('<%= name %> prefers <%= style %> syntax.',
  ASP_SYNTAX);
people.each(function(person) {
  alert(tpl.evaluate(person));
});
// Alerts "Bill Gates prefers ASP syntax.",
// then "Andrew Dupont prefers Ruby syntax."
