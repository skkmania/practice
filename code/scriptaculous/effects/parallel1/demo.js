/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
document.observe('dom:loaded', function() {
  $('demo').observe('click', function() {

    new Effect.Parallel([
      new Effect.Opacity('demo', { sync: true, from: 1, to: 0.33 }),
      new Effect.Scale('demo', 150, { sync: true,
        scaleFromCenter: true })
    ], { duration: 2 });

  });
});
