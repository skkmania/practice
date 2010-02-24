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

  gTux = new Draggable('piece', {
    snap: function(x, y) {
      return [x, y].map(function(coord) { 
        coord = ((coord - 4) / 64).round();
        return (coord < 0 ? 0 : (coord > 2 ? 2 : coord)) * 64 + 4;
      });
    },
    onStart: function() {
      $('board').addClassName('tuxMoving');
    },
    onEnd: function(d) {
      $('board').removeClassName('tuxMoving');
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
