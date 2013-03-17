define([
  'underscore',
  'backbone',
  'models/expression'
], function(_, Backbone, Expression) {
  var Expressions = Backbone.Collection.extend({
    model: Expression,
    url: '/expressions'
  });

  return Expressions;
});
