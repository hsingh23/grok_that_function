define([
  'jquery',
  'underscore',
  'backbone',
  'views/expressions/show',
  'hb!templates/expressions/list.hb',
  'hb!templates/expressions/controls.hb'
], function($, _, Backbone, 
            expressionShowView, 
            expressionsListTemplate, 
            expressionsControlsTemplate) {
  var ExpressionsListView = Backbone.View.extend({

    initialize: function() {
      this.subviews = [];
      this.listenTo(this.collection, 'add', this.addOne);
      this.listenTo(this.collection, 'reset', this.addAll);
      // TODO I'm unsure of the correct way to handle this, after everything is
      // added render needs to be called, currently the below listener does
      // that, however its dependent on the order of the listeners
      this.listenTo(this.collection, 'reset', this.render);

      this.collection.fetch();
    },

    render: function() {
      this.$el.html(expressionsListTemplate());
      this.graphsEl = this.$('.graphs');
      this.controlsEl = this.$('.controls');

      this.
        renderSubviews().
        renderControls();

      return this;
    },

    addOne: function(expression) {
      var expressionView = new expressionShowView({model: expression})
      this.subviews.push(expressionView);
    },

    addAll: function() {
      this.collection.forEach(this.addOne, this);
    },

    renderControls: function() {
      this.controlsEl.html(
        expressionsControlsTemplate({params: this.modelParams()}));

      return this;
    },

    renderSubviews: function() {
      this.subviews.forEach(this.renderSubview, this);

      return this;
    },

    renderSubview: function(subview) {
      // unfortunately for expressionShowView, it must be appended before it is
      // rendered because of the way flot works
      this.graphsEl.append(subview.el);
      subview.render();
    },

    modelParams: function () {
      if (this.collection.models.length !== 0) {
        return this.collection.models[0].get('params');
      } else {
        return [];
      }
    }
  });

  return ExpressionsListView;
});
