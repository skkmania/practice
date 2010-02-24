/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
var CoolObj = {
  name: 'Joe the cool object',

  getName: function() {
    return this.name;
  }
};

CoolObj.getName()
// -> 'Joe the cool object'

function callFx(fx) {
  return fx();
}

// WRONG: creates a new bound function on each iteration!
for (var index = 1; index <= 42; ++index)
  callFx(CoolObj.getName.bind(CoolObj));

// RIGHT: caches the bound version
var boundGetName = CoolObj.getName.bind(CoolObj);
for (var index = 1; index <= 42; ++index)
  callFx(boundGetName);
