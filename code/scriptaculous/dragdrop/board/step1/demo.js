/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
var gTux;
var togglecounter = 0;

function drawBoard(board, cols, rows) { 
  for (var row = 0; row < rows; ++row)
    for (var col = 0; col < cols; ++col) {
      var cell = new Element('span', { 
        'class': 'cell ' + (1 == (row + col) % 2 ? 'white' : 'black') });
      board.appendChild(cell);
    }
} // drawBoard

function toggleTux() {
  if (gTux) {
    gTux.element.setStyle({ cursor: 'default' });
    gTux.destroy(); 
    gTux = null;
    return;
  }
  gTux = new Draggable('piece'); 
  gTux.element.setStyle({ cursor: '' });
  gTux.element.addClassName('draggable');
} // toggleTux

function copyToAnother() {
  var gTux2 = gTux;
  $('board2').appendChild(gTux2.element);
}

function copyHTML() {
  var tmp = $('board2').innerHTML;
  $('board2').innerHTML = $('board').innerHTML;
  $('board').innerHTML = tmp;
}

function addcn_a() {
  $('dummy').addClassName('a');
  $('cln').innerHTML = $('dummy').className;
}

function addcn_d() {
  $('dummy').addClassName('f');
  $('cln').innerHTML = $('dummy').className;
}

function togglecn() {
  var chr = "abc"[togglecounter%3]; //  + " " + "bca"[togglecounter%3]; 
  $('dummy').toggleClassName(chr);
  $('cln').innerHTML = $('dummy').className;
  togglecounter++;
}

function moveToAnother() {
  $('message').innerHTML = "board's childs are : " + $('board').childElements().size();
  $('message2').innerHTML = "board2's childs are : " + $('board2').childElements().size();
  if($('board').childElements().include(gTux.element)){
    $('board').removeChild( gTux.element );
    $('board2').appendChild( gTux.element );
  } else {
    $('board2').removeChild( gTux.element );
    $('board').appendChild( gTux.element );
  }
  $('after-message').innerHTML = "board's childs are : " + $('board').childElements().size();
  $('after-message2').innerHTML = "board2's childs are : " + $('board2').childElements().size();
}

document.observe('dom:loaded', function() {
  $('chkDraggable').observe('click', toggleTux);
  $('moveDraggable').observe('click', moveToAnother);
  $('copyDraggable').observe('click', copyToAnother);
  $('copyHtml').observe('click', copyHTML);
  $('toggleCN').observe('click', togglecn);
  $('addCN').observe('click', addcn_a);
  $('addCNd').observe('click', addcn_d);
  var board = $('board');
  var board2 = $('board2');
  drawBoard(board, 3, 3);
  drawBoard(board2, 3, 3);
  toggleTux();
});
