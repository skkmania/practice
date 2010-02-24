/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
// OK, emulating a String.replace on a global regex:
'Vowels are bad for you'.gsub(/[aeiouy]/, '-')
// -> 'V-w-ls -r- b-d f-r ---'

// Group-based replacement
'My name is Henry-James'.gsub(/[aeiouy]/, '[#{0}]')
// -> 'M[y] n[a]m[e] [i]s H[e]nr[y]-J[a]m[e]s'

// Escaping #
'Life is short'.sub(/\w+/, '\##{0}\#')
// -> '#Life# is short'

// Coming soon to a monitor near you...  String#replace could not
// work here on Safari 1.x and early 2.x.
'Die hard 4 (scripting is back with a vengeance)'.gsub(/\w+/,
  function(match) { return match[0].capitalize(); })
// -> 'Die Hard 4 (Scripting Is Back With A Vengeance)'

// How about bracketing the 3 first words?
'Poor sample string gets framed'.sub(/\w+/, '[#{0}]', 3)
// -> '[Poor] [sample] [string] gets framed'

// Let's count the 'o' sequence lengths...
var oCounts = []
'foo boo boz'.scan(/o+/, function(match) {
  oCounts.push(match[0].length);
});
oCounts
// -> [2, 2, 1]
