define([
  'jquery',
  'underscore',
  'backbone',
  'flot',
  'hb!templates/math_functions/show.hb'
], function($, _, Backbone, Flot, mathFunctionShowTemplate) {
  var MathFunctionShowView = Backbone.View.extend({
    render: function(){
      var graphData = [];

      for (var i = 0; i < 2 * Math.PI; i += .1) {
        graphData.push([i, this.model.valueAt({x: i, y: 1})]);
      }

      $.plot(this.$el, [graphData]);
    }
  });

  return MathFunctionShowView;
});
