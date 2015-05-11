var shtemplate = require('../shtemplater.js');

var byTemplate = new shtemplate('<html>{{cheese}}</html>');

module.exports = function(){
	return {
		"/by/": function(request, response) {
			response.end(byTemplate.run({
				cheese: 'shoes'
			}));
		},
		"/filter/": function(request, response) {
			response.end('<html>Categories filtered</html>');
		},
	}
}