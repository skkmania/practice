/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
document.observe('dom:loaded', function() {
  var callbacks = {
    onSlide: function(value, slider) {
      $('sliding').update(slider.track.id + ' sliding to ' +
        value.toFixed(3));
    },
    onChange: function(value, slider) {
      $('changed').update(slider.track.id + '\'s value changed to ' +
        value.toFixed(3));
    }
  };
  new Control.Slider('handle1', 'track1', {
    onSlide: callbacks.onSlide, onChange: callbacks.onChange
  });
  new Control.Slider('handle2', 'track2', {
    axis: 'vertical', sliderValue: 0.5,
    onSlide: callbacks.onSlide, onChange: callbacks.onChange
  });
});
