/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
var undef;
Object.toJSON(undef)
// => ''
Object.toJSON(null)
// => 'null'

var doudou = { first: 'Élodie', last: 'Jaubert',
  birthDate: new Date(1980, 9, 29), // 0 == January
  gang: [ 'Camille', 'Clotilde', 'Diane' ],
  getJob: function() { return 'Chef du monde' },
  blond: false
};
Object.toJSON(doudou);
// (single-line value, wrapped here, assuming we're GMT+1 in Fall)
// => '{"first": "Élodie", "last": "Jaubert",
//     "birthDate": "1980-10-28T23:00:00Z",
//     "gang": ["Camille", "Clotilde", "Diane"], "blond": false}'
