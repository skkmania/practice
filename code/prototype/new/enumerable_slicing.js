/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/

var students = [
  { name: 'Sunny', age: 20 },  { name: 'Audrey', age: 21 },
  { name: 'Matt', age: 20 },   { name: 'Élodie', age: 26 },
  { name: 'Will', age: 21 },   { name: 'David', age: 23 },
  { name: 'Julien', age: 22 }, { name: 'Thomas', age: 21 },
  { name: 'Serpil', age: 22 }
];



students.eachSlice(4, function(toon) {
  return toon.pluck('name');
})
// -> [ ['Sunny', 'Audrey', 'Matt', 'Élodie'],
//      ['Will', 'David', 'Julien', 'Thomas'],
//      ['Serpil'] ]



students.eachSlice(2).first()
// -> [{ name: 'Sunny', age: 20 }, { name: 'Audrey', age: 21 }]


// OK, let's get the powertools out...


students.eachSlice(3, function(toon) { 
  var maxAge = toon.max(function(s) { return s.age; }); 
  var leader = toon.findAll(function(s) { return s.age == maxAge }) 
    .sortBy(function(s) { return s.name; }).last();
  return { leader: leader.name, members: toon.pluck('name').sort() };
})
// -> [ { leader: 'Audrey', members: ['Audrey', 'Matt', 'Sunny'] },
//      { leader: 'Élodie', members: ['David', 'Will', 'Élodie'] },
//      { leader: 'Serpil', members: ['Julien', 'Serpil', 'Thomas' ] } ]



students.pluck('name').inGroupsOf(4) { 
// -> [ ['Sunny', 'Audrey', 'Matt', 'Élodie'],
//      ['Will', 'David', 'Julien', 'Thomas'],
//      ['Serpil', null, null, null] ]
