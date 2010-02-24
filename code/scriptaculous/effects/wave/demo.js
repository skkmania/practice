/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
Effect.Wave = Class.create(Effect.Base, {
  initialize: function(element) {
    this.element = $(element); 
    this.start(arguments[1] || {}); 
  },

  setup: function(){
    Effect.tagifyText(this.element); 
    this.chars = this.element.childElements(); 
  },

  update: function(position) {
    var factor = position < 0.5 ? position * 2 : (1 - position) * 2;
    var topPos;
    this.chars.each(function(character, index) {
      topPos = Math.sin(position * ((index % 20) + 1)) * 30 * factor;
      character.setStyle({ top: Math.round(topPos) + 'px' });
    });
  }
});
