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
    onSlide: function(values, slider) {
      $('sliding').update(slider.track.id + '\s handle #' +
        slider.activeHandleIdx + ' sliding to ' +
        values[slider.activeHandleIdx]);
    },
    onChange: function(values, slider) {
      $('changed').update(slider.track.id + '\'s handle #' +
        slider.activeHandleIdx + '\'s value changed to ' +
        values[slider.activeHandleIdx]);
    }
  };
  
  new Control.Slider(['handle1', 'handle2', 'handle3'],
    'track1', {
    range: $R(1, 11), values: $R(1, 11),
    sliderValue: [3, 6, 9],
    spans: ['range1', 'range2'], restricted: true,
    onSlide: callbacks.onSlide, onChange: callbacks.onChange
  });
  
});
