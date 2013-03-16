define(['underscore', 'jquery', 'jasmine-html'], function(_, $, jasmine) {
 
  return function() {
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;
   
    var htmlReporter = new jasmine.HtmlReporter();
   
    jasmineEnv.addReporter(htmlReporter);
   
    jasmineEnv.specFilter = function(spec) {
      return htmlReporter.specFilter(spec);
    };
   
    var specs = [];
   
    $(function(){
      require(specs, function(){
        jasmineEnv.execute();
      });
    });
  }
 
});
