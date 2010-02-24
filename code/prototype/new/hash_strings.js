/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
$H({ name: 'Prototype', version: 1.5 }).inspect()
// -> "<#Hash:{name: 'Prototype', version: 1.5}>" // Order not guaranteed

$H({ action: 'ship', order_id: 123, fees: ['f1', 'f2'],
  'label': 'a demo' }).toQueryString()
// -> 'action=ship&order_id=123&fees=f1&fees=f2&label=a%20demo'

$H().toQueryString()
// -> ''

// "Class method" variant on any object: use the Object namespace instead.
Object.toQueryString({ foo:'bar' })
// -> 'foo=bar'
