define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var MathFunction = Backbone.Model.extend({
    initialize: function(attributes) {
      var callableFunctionArgs = ["params", this.get("functionBody")];

      this.valueAt = Function.apply(this, callableFunctionArgs);
    }
  });

  return MathFunction;
});
