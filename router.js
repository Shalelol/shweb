var url = require('url');

module.exports = function(routes) {
	return function(request, response) {
		var parsedUrl = url.parse(request.url, true);

		if(parsedUrl.pathname === '/') {
			return routes["/index"](request, response);
		}

		if(typeof(routes[parsedUrl.pathname]) !== 'function') { 
			response.writeHead(404);
			return response.end('Not Found');
		} else {
			return routes[parsedUrl.pathname](request, response);
		}
	}
}



	
	