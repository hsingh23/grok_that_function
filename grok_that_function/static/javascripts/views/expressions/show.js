define([
  'jquery',
  'underscore',
  'backbone',
  'flot',
  'hb!templates/expressions/show.hb'
], function($, _, Backbone, Flot, expressionShowTemplate) {
  var ExpressionShowView = Backbone.View.extend({
    render: function(){
      var graphData = [],
          graphEl;

      this.$el.append(expressionShowTemplate());
      // TODO there is a bug with more than one graph, what's the correct way to
      // do this...?
      graphEl = $('.graph', this.$el);

      for (var i = 0; i < 2 * Math.PI; i += .1) {
        graphData.push([i, this.model.valueAt({x: i, y: 1, z: 1})]);
      }

      $.plot(graphEl, [graphData]);
    }
  });

  return ExpressionShowView;
});
