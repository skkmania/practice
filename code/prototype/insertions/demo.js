/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
function demoAllInsertions() {
  // Default syntax
  $('ref').insert('<div class="element bottom">' +
    '<code>bottom</code></div>');
  // Advanced syntax
  $('ref').insert({
    before: '<div class="element before"><code>before</code></div>',
    top: '<div class="element top"><code>top</code></div>',
    after: '<div class="element after"><code>after</code></div>'
  });
  // A bit of inline scripting?
  $('ref').wrap('div', { className: 'element wrap' });
  $('ref').insert({ top:
    '<div class="element top" id="scripted">Such a nice book</div>' + 
    '<script type="text/javascript">' +
    '$("scripted").update("Such a great book!")' +
    '<\/script>' }); 
} // demoAllInsertions

document.observe('dom:loaded', demoAllInsertions);
