require('./Utils/ends-with.js');
require('./Utils/keys.js');
var url = require('url');

var recursiveHash = function(obj) {
	var keys = obj.keys()
	
	for(var i = 0; i < keys.length; i++) {
 		item = keys[i];

		if(typeof(obj[item]) === 'function' && obj[item].length < 2) {
			obj[item] = recursiveHash(obj[item]());
		} 
	}

	return obj;
}

var recursiveFlatten = function(obj, path, stack) {
	if(typeof(obj) !== 'object') {
		return;
	}

	path = path || '';
	stack = stack || {};

	var keys = obj.keys();
	for(var i = 0; i < keys.length; i++) {
		key = keys[i];
		//console.log(path + key);

		if(typeof(obj[key]) !== 'object') {
			stack[path + key] = obj[key];
		}

		recursiveFlatten(obj[key], path + key, stack);
	}

	return stack;
}

var buildRouter = function(routes) {
	return 
};


module.exports = function(routes) {
	routes = recursiveFlatten(recursiveHash(routes));

	routes["/routes"] = function (request, response) {
		var html = '<html><head><title>Routes</title></head><body><ul>';

		for(var prop in routes) {
			if(routes.hasOwnProperty(prop)) {
				html += '<li>' + prop + '</li>';
			}
		}

		html += '</ul></body></html>';

		response.end(html);
	};

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



	
	