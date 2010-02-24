/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
var people = [
  { name: 'Élodie Jaubert', field: 'Heritage management',
    role: 'my fiancée' },
  { name: 'Seth Dillingham', field: 'Web development',
    role: 'a fellow Core' }
];
var tpl = new Template('#{name} works in #{field} and is #{role}.');

people.each(function(person) {
  alert(tpl.evaluate(person));
}
// Alerts
// "Seth Dillingham works in Web development and is a fellow Core.",
// then "Élodie Jaubert works in Heritage management and is my fiancée."
