/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
var girls = [
  'Anne-Julie Peschaud', 'Audrey Guillemenot', 'Aurore Jaballah',
  'Clotilde Michel',     'Corinne Dillingham', 'Diane Mellini',
  'Élodie Jaubert',      'Erin Odenweller',    'Jes "Canllaith" Hall',
  'Laurie Fatoux',       'Sandrine Daspet',    'Serpil Uren',
  'Valérie Savalle'
];

document.observe('dom:loaded', function() {
  new Autocompleter.Local('edtContact', 'contactChoices', girls);
});
