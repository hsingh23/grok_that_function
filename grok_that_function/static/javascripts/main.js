require.config({
  urlArgs: Math.random(),
  paths: { 
    'jquery': 'lib/jquery-1.9.1.min', 
    'underscore': 'lib/underscore-min', 
    'backbone': 'lib/backbone-min',
    'json2': 'lib/json2',
    'handlebars': 'lib/handlebars',
    'hb': 'lib/hbtemplate',
    'text': 'lib/text'
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },
    'handlebars': {
      exports: 'Handlebars'
    },
    'json2': {
      exports: 'JSON'
    }
  }
}); 

require(['app'], 
  function(app){
    app.initialize();
});
