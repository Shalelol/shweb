module.exports = function(){
	return {
		"/by/": function(request, response) {
			response.end('<html>Categories sorted</html>');
		},
		"/filter/": function(request, response) {
			response.end('<html>Categories filtered</html>');
		},
	}
}