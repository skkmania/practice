/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/

var Animal = Class.create({
  initialize: function(name) {
    this.name = name;
  },
  eat: function(food) {
    return this.say('Yum!');
  },
  say: function(msg) {
    return this.name + ': ' + msg;
  }
});


var fido = new Animal('Fido');
fido.name
// => 'Fido'
fido.say('Hi')
// => 'Fido: Hi'
fido.eat('bone');
// => 'Fido: Yum!'

