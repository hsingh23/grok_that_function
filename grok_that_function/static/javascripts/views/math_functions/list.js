define([
  'jquery',
  'underscore',
  'backbone',
  'hb!templates/math_functions/list.hb',
  'views/math_functions/show'
], function($, _, Backbone, mathFunctionsListTemplate, mathFunctionShowView) {
  var MathFunctionsListView = Backbone.View.extend({
    render: function(){
      var model = this.collection.models[0],
          modelView;
      // TODO model and el should be made from a list...

      modelView = new mathFunctionShowView({model: model, el: this.$el})
      modelView.render();
    }
  });

  return MathFunctionsListView;
});
