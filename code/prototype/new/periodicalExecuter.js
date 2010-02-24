/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
// Campfire style :-)
new PeriodicalExecuter(pollChatRoom, 3);

new PeriodicalExecuter(function(pe) {
  if (!confirm('Want me to annoy you again later?'))
    pe.stop();
}, 5);
// Note that there won't be a stack of such messages if the user takes
// too long answering to the question...

var gCallCount = 0;
new PeriodicalExecuter(function(pe) {
  if (++gCallCount > 3)
    pe.stop();
  else
    alert(gCallCount);
}, 1);
// Will only alert 1, 2 and 3, then the PE stops.

