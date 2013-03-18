define([
  'jquery',
  'underscore',
  'backbone',
  'hb!templates/expressions/list.hb',
  'views/expressions/show'
], function($, _, Backbone, expressionsListTemplate, expressionShowView) {
  var ExpressionsListView = Backbone.View.extend({
    initialize: function() {
      this.$el.append(expressionsListTemplate());

      this.graphsEl = this.$('.graphs');
      this.controlsEl = this.$('.controls');
      // TODO initialize a controls view...? Or keep it tied in here?

      this.listenTo(this.collection, 'add', this.addOne);
      this.listenTo(this.collection, 'reset', this.addAll);
      this.listenTo(this.collection, 'all', this.render);

      this.collection.fetch();
    },

    render: function() {
      this.createControls();
      // TODO should I do something with the renders of the subviews...?
    },

    addOne: function(expression) {
      var expressionView = new expressionShowView({model: expression})
      // unfortunately for expressionShowView, it must be appended before it is
      // rendered because of the way flot works
      this.graphsEl.append(expressionView.el);
      expressionView.render();
    },

    addAll: function() {
      this.collection.each(this.addOne, this);
    },

    createControls: function() {
      console.log('should we create controls? (do this lazily)');
    }
  });

  return ExpressionsListView;
});
