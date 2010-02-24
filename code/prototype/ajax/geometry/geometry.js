/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
function bindWidgets() {
  var widgets = $$('.widget');
  widgets.each(function(w) {
    var handle = w.down('h2');
    handle.observe('mousedown', function() {
      raiseWidget(widgets, w);
    });
    new Draggable(w, { handle: handle, zindex: false });
  });
} // bindWidgets

function raiseWidget(widgets, widget) {
  var widgetZIndex = widget.getStyle('zIndex');
  widgets.each(function(w) {
    var zI = w.getStyle('zIndex');
    if (zI > widgetZIndex)
      w.setStyle({ zIndex: zI - 1 });
  });
  widget.setStyle({ zIndex: widgets.length });
} // raiseWidget

function syncGeometryOnServer() {
  var widgets = $$('.widget');
  var params = {};
  widgets.each(function(w, index) { 
    var pos = Position.cumulativeOffset(w);
    params['left' + index] = pos[0];
    params['top' + index] = pos[1];
    params['zIndex' + index] = w.getStyle('zIndex');
  });
  new Ajax.Request('/geometry', { parameters: params }); 
} // syncGeometryOnServer

Draggables.addObserver({ onEnd: syncGeometryOnServer });

document.observe('dom:loaded', bindWidgets);
