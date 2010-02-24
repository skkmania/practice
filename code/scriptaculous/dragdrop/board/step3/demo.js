/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
var gTux;

function drawBoard(cols, rows) {
  var board = $('board');
  for (var row = 0; row < rows; ++row)
    for (var col = 0; col < cols; ++col) {
      var cell = new Element('span', {
        'class': 'cell ' + (1 == (row + col) % 2 ? 'white' : 'black') });
      board.appendChild(cell);
    }
} // drawBoard

function getTuxCell(tux) {
  var pos = tux.positionedOffset();
  return [(pos.left / 64).floor(), (pos.top / 64).floor()];
} // getTuxCell

function toggleTux() {
  if (gTux) {
    gTux.element.setStyle({ cursor: 'default' });
    gTux.destroy();
    gTux = null;
    return;
  }

  var range = $R(0, 2);
  $('piece').isOut = function() {
    var pos = getTuxCell(this);
    return !(range.include(pos[0]) && range.include(pos[1]));
  };
  gTux = new Draggable('piece', {
    revert: $('piece').isOut.bind($('piece')), 
    reverteffect: function(tux, top_offset, left_offset) { 
      var secs = Math.sqrt((top_offset^2).abs() +
        (left_offset^2).abs()) * 0.06;
      new Effect.Move(tux, {
        x: -left_offset, y: -top_offset, duration: secs,
        queue: { scope: '_draggable', position: 'end' },
        transition: Effect.Transitions.spring
      });
    },
    onStart: function() {
      $('board').addClassName('tuxMoving');
    },
    onEnd: function(d) {
      $('board').removeClassName('tuxMoving');
      if (d.element.isOut()) return; 
      var pos = getTuxCell(d.element);
      pos = 'ABC'.charAt(pos[1]) + (pos[0] + 1);
      $('log').insert('<li>Tux to ' + pos + '</li>');
    }
  });

  gTux.element.setStyle({ cursor: '' });
} // toggleTux

document.observe('dom:loaded', function() {
  $('chkDraggable').observe('click', toggleTux);
  drawBoard(3, 3);
  toggleTux();
});
