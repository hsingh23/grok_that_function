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

    initialize: function() {
      this.listenTo(this.model, 'change:params', this.renderPlot);
    },

    render: function() {
      this.$el.html(expressionShowTemplate());
      this.graphEl = this.$('.graph');

      this.renderPlot();

      return this;
    },

    renderPlot: function() {
      this.computeData();
      $.plot(this.graphEl, [this.data]);

      return this;
    },

    computeData: function() {
      var dataPoint = {};
      this.data = [];

      // TODO remove this hack and push logic down into the model
      // TODO the other complication is that the step size should depend upon
      // the expression
      for (var i = 0; i < 2 * Math.PI; i += .1) {
        _.extend(dataPoint, this.model.get('params'));
        dataPoint['x'] = i;
        this.data.push([i, this.model.valueAt(dataPoint)]);
      }
    }
  });

  return ExpressionShowView;
});
