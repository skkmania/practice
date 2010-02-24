/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
$$('div')
// -> all DIVs in the document.  Similar to
//    document.getElementsByTagName('div'), although returning a non-live
//    Array of extended (as in $'d) elements, instead of a live NodeList
//    of (possibly unextended) elements.

$$('#contents')
// -> same as $('contents'), only it returns an array anyway.

$$('li.faux')
// -> all LI elements with class 'faux'

$$('#contents a[rel]')
// -> all links inside the element of ID "contents" with a rel attribute

$$('a[href="#"]')
// -> all links with a href attribute of value "#" (eyeew!)

$$('#navbar li', '#sidebar li')
// -> all list items within the elements of ID "navbar" or "sidebar"

$$('a:not([rel~=nofollow])');
// -> all links, excluding those whose rel attribute contains the word
//    "nofollow"

$$('table tbody > tr:nth-child(even)');
// -> all even rows within all table bodies

$$('div:empty');
// -> all DIVs without content (i.e., whitespace-only)
