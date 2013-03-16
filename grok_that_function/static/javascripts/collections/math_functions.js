define([
  'underscore',
  'backbone',
  'models/math_function'
], function(_, Backbone, MathFunction) {
  var MathFunctions = Backbone.Collection.extend({
    model: MathFunction,
    url: '/math_functions' // TODO change this to just stars when we have a server...
  });

  return MathFunctions;
});
