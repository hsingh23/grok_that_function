/* ExpressionShowView handles rendering of an expression as a graph. 
 * It must be appended to the DOM before it is rendered because of the way flot
 * works.
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'flot',
  'hb!templates/expressions/show.hb'
], function($, _, Backbone, Flot, expressionShowTemplate) {
  var ExpressionShowView = Backbone.View.extend({

    render: function() {
      this.$el.html(expressionShowTemplate());
      this.graphEl = this.$('.graph');

      this.computeData();
      $.plot(this.graphEl, [this.data]);

      return this;
    },

    computeData: function() {
      this.data = [];

      for (var i = 0; i < 2 * Math.PI; i += .1) {
        this.data.push([i, this.model.valueAt({x: i, y: 1, z: 1})]);
      }
    }
  });

  return ExpressionShowView;
});
