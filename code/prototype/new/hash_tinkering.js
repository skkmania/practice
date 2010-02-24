/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
var lib = $H({ name: 'Prototype', version: 1.5 });
lib.keys().sort()
// -> ['name', 'version']
lib.values().sort()
// -> [1.5, 'Prototype']

lib.update({ version: '1.5.1', author: 'sam' });
lib.invoke('join', ' = ').sort().join(', ') 
// -> 'author = sam, name = Prototype, version = 1.5.1'

lib.index('sam')
// -> 'author'

lib.unset('author')
// -> 'sam'

lib.keys().sort()
// -> ['name',' version']

$H().keys()
// -> []
