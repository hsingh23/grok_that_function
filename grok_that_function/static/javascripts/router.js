define([
  'jquery',
  'underscore',
  'backbone',
  'collections/expressions',
  'views/expressions/list',
], function($, _, Backbone, Expressions, ExpressionsListView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      'expressions': 'showExpressions',

      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    var appRouter = new AppRouter();

    appRouter.on('route:showExpressions', function() {
      var expressions,
          expressionsView;

      expressions = new Expressions();
      expressions.fetch({success: function() {
        $(function() {
        expressionsView = new ExpressionsListView({el: $('#container'), collection: expressions});
        expressionsView.render();
        });
      }});
    });

    appRouter.on('route:defaultAction', function(actions) {
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
    });

    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
