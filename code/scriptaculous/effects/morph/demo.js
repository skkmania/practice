/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
document.observe('dom:loaded', function() {
  var demo = $('demo');
  demo.setOpacity(0.5);
  demo.observe('click', function() {
    demo.morph({
      width: '50ex', height: '10em',
      backgroundColor: '#ddf', color: '#009',
      borderWidth: '1em', borderColor: '#009',
      opacity: '1'
    }, { duration: 2 });
  });
});
