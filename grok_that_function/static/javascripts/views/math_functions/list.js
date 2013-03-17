define([
  'jquery',
  'underscore',
  'backbone',
  'hb!templates/math_functions/list.hb',
  'views/math_functions/show'
], function($, _, Backbone, mathFunctionsListTemplate, mathFunctionShowView) {
  var MathFunctionsListView = Backbone.View.extend({
    render: function(){
      var model,
          modelView,
          graphsEl;

      this.$el.append(mathFunctionsListTemplate());
      graphsEl = $('.graphs', this.$el);
      for (var i = 0; i < this.collection.models.length; i++) {
        model = this.collection.models[i];
        modelView = new mathFunctionShowView({model: model, el: graphsEl})
        modelView.render();
      }
    }
  });

  return MathFunctionsListView;
});
