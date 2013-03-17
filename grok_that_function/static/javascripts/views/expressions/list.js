define([
  'jquery',
  'underscore',
  'backbone',
  'hb!templates/expressions/list.hb',
  'views/expressions/show'
], function($, _, Backbone, expressionsListTemplate, expressionShowView) {
  var ExpressionsListView = Backbone.View.extend({
    render: function(){
      var model,
          modelView,
          graphsEl;

      this.$el.append(expressionsListTemplate());
      graphsEl = $('.graphs', this.$el);
      for (var i = 0; i < this.collection.models.length; i++) {
        model = this.collection.models[i];
        modelView = new expressionShowView({model: model, el: graphsEl})
        modelView.render();
      }
    }
  });

  return ExpressionsListView;
});
