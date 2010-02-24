/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
$R(1,10).min()
// -> 1

['hello', 'world', 'gizmo'].min()
// -> 'gizmo'

['hello', 'world', 'gizmo'].max()
// -> 'world'

function Person(name, age) {
  this.name = name;
  this.age = age;
}

var john = new Person('John', 20);
var mark = new Person('Mark', 35);
var daisy = new Person('Daisy', 22);

[john, mark, daisy].min(function(person) {
  return person.age;
})
// -> 20

[john, mark, daisy].max(function(person) {
  return person.age;
})
// -> 35
