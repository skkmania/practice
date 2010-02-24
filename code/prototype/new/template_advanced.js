/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
var people = [
  { name: 'Élodie Jaubert',
    interests: [ 'heritage', 'culture', 'music' ] },
  { name: 'Seth Dillingham' }
];
var tpl = new Template(
  '#{length} people.  #{0.name} likes #{0.interests[2], ' +
  'among other things.');
tpl.evaluate(people)
// => '2 people.  Élodie likes music, among other things.'
// You can use [] or . indifferently, except when the prop name is
// empty or contains a dot: then you need the square brackets.
