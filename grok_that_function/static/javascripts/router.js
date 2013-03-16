define([
  'jquery',
  'underscore',
  'backbone',
  'collections/math_functions'
], function($, _, Backbone, MathFunctions){
  var AppRouter = Backbone.Router.extend({
    routes: {

      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    var appRouter = new AppRouter();

    appRouter.on('route:defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was

      mathFunctions = new MathFunctions();
      mathFunctions.fetch({success: function(models, response) {
        window.blah = mathFunctions.at(0);
      }});
    });

    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
