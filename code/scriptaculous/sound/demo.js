/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
function playAmbience(e) {
  e.stop();
  Sound.play(e.findElement('a').href, { track: 'ambience',
    replace: true });
}

function playEffect(e) {
  e.stop();
  Sound.play(e.findElement('a').href, { track: 'effects' });
}

document.observe('dom:loaded', function() {
  $('effects').select('a').invoke('observe', 'click', playEffect);
  $('ambience').select('a').invoke('observe', 'click', playAmbience);
});