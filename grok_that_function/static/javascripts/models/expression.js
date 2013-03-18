define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var Expression = Backbone.Model.extend({

    initialize: function(attributes) {
      var callableFunctionArgs = ["params", this.get("functionBody")],
          params = {};
      this.valueAt = Function.apply(this, callableFunctionArgs);

      // TODO still unsure how I want parameters returned from the server, for
      // right now we'll take the array of parameter and turn it into a
      // parameter => value hash -- other possibilities include having a
      // submodel, returing a hash from the server, etc
      attributes.params.forEach(function(param) {
        this.get('params')[param] = 1;
      }, this);
    },

    setParam: function(param, value) {
      this.get('params')[param] = value;
      this.trigger('change:params');
    }
  });

  return Expression;
});
