/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
'border'.camelize()
// -> 'border'

'border-style'.camelize()
// -> 'borderStyle'

'border-sTYLE'.camelize()
// -> 'borderSTYLE' // See?  Leaving non-initials untouched.

'border-left-color'.camelize()
// -> 'borderLeftColor'

'borderLeftColor'.underscore()
// -> 'border_left_color'

'borderLeftColor'.underscore().dasherize()
// -> 'border-left-color'

'Draft-WHATWebForms1'.underscore()
// -> 'draft_what_web_forms1'

'cool stuff'.capitalize()
// -> 'Cool stuff'

'COOL STUFF'.capitalize()
// -> 'Cool stuff' // Lower-casing the remainder, too.
