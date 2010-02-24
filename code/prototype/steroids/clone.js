/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
var o = {
  name: 'Prototype',
  version: 1.5,
  authors: ['sam', 'contributors']
};
var o2 = Object.clone(o); // Apparently cloning...

o2.version = '1.5 weird';
o2.authors.pop(); // Watch out!  Shared reference inside!

o.version
// -> 1.5

o2.version
// -> '1.5 weird'

o.authors
// -> ['sam'] // Ouch!  Shallow copy ended up with a shared array!
