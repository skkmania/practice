/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
// Extracted from script.aculo.us 1.8.0
if((typeof Prototype=='undefined') ||
   (typeof Element == 'undefined') ||
   (typeof Element.Methods=='undefined') ||
   (convertVersionString(Prototype.Version) <
    convertVersionString(Scriptaculous.REQUIRED_PROTOTYPE)))
  throw("script.aculo.us requires the Prototype JavaScript framework >= " +
    Scriptaculous.REQUIRED_PROTOTYPE);
