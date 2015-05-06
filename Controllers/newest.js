module.exports = function() {
	return {
		'/categories/': function(request, response) {
			response.end('<html>Newest categories</html>');
		},
		'/ratings/': function(request, response) {
			response.end('<html>Newest ratings</html>');
		},
	}
};