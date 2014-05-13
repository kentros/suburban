Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello Kenny!");
});


Parse.Cloud.define("random", function(request, response) {
    var promise = Parse.Cloud.httpRequest({
        method:'GET',
        url:'http://api.urbandictionary.com/v0/random',
	success: function(httpResponse){
            var str = httpResponse.data.list[0].definition;
            var suburb = require('cloud/suburb.js');
            response.success(suburb.euphemize(str));	    
	},
	error: function(httpResponse){
	    response.error(error);
	}
    });
});

Parse.Cloud.define("define", function(request, response) {
    var word = request.params.word;
    var promise = Parse.Cloud.httpRequest({
        method:'GET',
        url:'http://api.urbandictionary.com/v0/define?term=' + word,
	success: function(httpResponse){
            var str = httpResponse.data.list[0].definition;
            var suburb = require('cloud/suburb.js');
            response.success(suburb.euphemize(str));	    
	},
	error: function(httpResponse){
	    response.error(error);
	}
    });
});

Parse.Cloud.define("encheferize", function(request, response) {
    var chef = require('cloud/chef.js');
    var original = request.params.line;
    response.success(chef.enchef(original));	    
});