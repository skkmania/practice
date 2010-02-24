/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
function triggerEffect(e) {
  e.stop();
  var effect = $F('effect');
  var elts = ('Puff' == effect ? $$('#heading span').reverse()  : 'heading');
  var options = ('Puff' == effect ? { speed: 0.05 } :
    { speed: 0.05, afterFinishInternal: Prototype.emptyFunction });
  Effect.multiple(elts, Effect[effect], options);
} // triggerEffect

document.observe('dom:loaded', function() {
  Effect.tagifyText('heading');
  $('tester').observe('submit', triggerEffect);
});
