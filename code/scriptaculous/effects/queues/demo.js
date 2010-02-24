/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
FADE_DURATION = 0.25;

function fade(e, mode) {
  var element = e.element();
  if ('LI' != element.tagName)
    return;
  e.stop();
  var url = element.getStyle('backgroundImage').replace(/_bw/, '');
  if ('bw' == mode)
    url = url.replace(/\.png/, '_bw.png');
  
  var queue = { scope: element.id, position: 'end' };
  element.visualEffect('Opacity', { to: 0.1, duration: FADE_DURATION,
    queue: queue });
  new Effect.Event({ queue: queue, afterFinish: function() {
    element.setStyle({backgroundImage: url});
  }});
  element.visualEffect('Opacity', { from: 0.1, to: 1,
    duration: FADE_DURATION, queue: queue });
  
} // fade

document.observe('dom:loaded', function() {
  var list = $('topics');
  list.observe('mouseover', fade.bindAsEventListener(this, 'bw'));
  list.observe('mouseout', fade.bindAsEventListener(this, 'color'));
});
