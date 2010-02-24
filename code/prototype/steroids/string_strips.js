/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
var spacedOutText = '   Hello there!\n';
var markup = '<h1>This is marked up text</h1>\n' +
  '<p>See, there are <strong>tags</strong>.</p>';
var scriptMarkup = '<h1>Okay, still marked up</h1>\n' +
  '<p>But this time we have scripts as well.</p>\n' +
  '<script type="text/javascript">\n' +
  'window.location.href = "http://ooo-bad-sitey.com/scam_me";\n' +
  '</script>\n' +
  '<p>End of markup.</p>';
var longText = 'This text is sort of too long for my taste, you know.';

spacedOutText.strip()
// -> 'Hello there!'

markup.stripTags()
// -> 'This is marked up text\nSee, there are tags.'

scriptMarkup.stripTags()
// -> 'Okay, still marked up\nBut this time we have scripts as well.\n\n' +
//    'window.location.href = "http://ooo-bad-sitey.com/scam_me";\n\n' +
//    'End of markup.'

scriptMarkup.stripScripts()
// -> '<h1>Okay, still marked up</h1>\n' +
//    '<p>But this time we have scripts as well.</p>\n\n' +
//    '<p>End of markup.</p>'

longText.truncate()
// -> 'This text is sort of too lo...'

longText.truncate(42)
// -> 'This text is sort of too long for my ta...'

longText.truncate(42, '~')
// -> 'This text is sort of too long for my tast~'
