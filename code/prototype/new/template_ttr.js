/***
 * Excerpted from "Prototype and script.aculo.us",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
***/
var student = {
  name: 'John',
  grades: [10, 12, 13.5, 8, 16],

  average: function() {
    return this.grades.inject(0, function(acc, g) { return acc + g }) /
      this.grades.length;
  },
  highest: function() { return this.grades.max(); },
  lowest: function() { return this.grades.min(); },

  toTemplateReplacements: function() {
    var result = Object.clone(this), student = this;
    ['average', 'highest', 'lowest'].each(function(methodName) {
      result[methodName] = student[methodName]();
    });
    return result;
  }
};

var tpl = new Template(
  '#{name} averages at #{average} (lowest: #{lowest})');
tpl.evaluate(student);
// => 'John averages at 11.9 (lowest: 8)'
