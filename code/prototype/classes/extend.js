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
	  Animal.newInstance();
    this.name = name;
  },
  eat: function(food) {
    return this.say('Yum!');
  },
  say: function(msg) {
    return this.name + ': ' + msg;
  }
});

Object.extend(Animal, {
	instanceCount: 0,
	newInstance: function() { ++this.instanceCount; }
});



var Cat = Class.create(Animal, {
  eat: function($super, food) {
    if (food instanceof Mouse) return $super(food);
    return this.say('Yuck!  I only eat mice.');
  }
});

var Mouse = Class.create(Animal); // Dumb subclass


var fido = new Animal('Fido');
var tom = new Cat('Tom');
var jerry = new Mouse('Jerry');
tom.say('Hi')
// => 'Tom: Hi'
jerry.eat('cheese')
// => 'Jerry: Yum!'
tom.eat(fido)
// => 'Tom: Yuck!  I only eat mice.'
tom.eat('bone')
// => 'Tom: Yuck!  I only eat mice.'
tom.eat(jerry)
// => 'Tom: Yum!'



Cat.addMethods({
	purr: function() { return this.say('Rrrrrr...'); }
});
tom.purr();
// => 'Tom: Rrrrrr...'



tom.constructor == Cat               // => true
tom.constructor.superclass == Animal // => true
Cat.superclass == Animal             // => true
Animal.superclass                    // => null
Animal.subclasses.length             // => 2
Animal.subclasses.first() == Cat     // => true
Animal.subclasses.last() == Mouse    // => true
Cat.subclasses                       // => []
