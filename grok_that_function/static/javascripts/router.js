define([
  'jquery',
  'underscore',
  'backbone',
  'collections/math_functions',
  'views/math_functions/list',
], function($, _, Backbone, MathFunctions, MathFunctionsListView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      'math_functions': 'showMathFunctions',

      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    var appRouter = new AppRouter();

    appRouter.on('route:showMathFunctions', function() {
      var mathFunctions,
          mathFunctionsView;

      mathFunctions = new MathFunctions();
      mathFunctions.fetch({success: function() {
        $(function() {
        mathFunctionsView = new MathFunctionsListView({el: $('#container'), collection: mathFunctions});
        mathFunctionsView.render();
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
