/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
var CoolObj = {
  name: 'Joe',

  getCallDef: function() {
    var call = 'getCallDef("' + this.name + '"';
    var extraArgs = arguments.length > 0
      ? ', ' + $A(arguments).join(', ')
      : '';
    return call + extraArgs + ')';
  }
};

CoolObj.getCallDef()
// -> 'getCallDef("Joe")'

var boundCall = CoolObj.getCallDef.bind(CoolObj, 1, 2, 3);

function callFx(fx) {
  return fx(4, 5);
}

callFx(boundCall)
// -> 'getCallDef("Joe", 1, 2, 3, 4, 5)'
