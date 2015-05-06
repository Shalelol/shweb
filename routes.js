var controllers = {
	"/categories": require('./Controllers/categories.js'),
	"/newest": require('./Controllers/newest.js')
}

var testObject = {
	'/top': {
		'/second1': function(a,b){},
		'/second2': {
			'/third1': 'string',
			'/third2': function(a,b){}
		}
	}
}

String.prototype.endsWith = function(test) {
	return this.length >= test.length && this.substr(this.length - test.length) == test;
}

Object.prototype.keys = function() {
	var keys = [];
	for(var key in this) {
		if(this.hasOwnProperty(key)) {
			keys.push(key);
		}
	}
	return keys;
}

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

var count = 0;
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

module.exports = (function() {
	controllers = recursiveHash(controllers)
	controllers = recursiveFlatten(controllers);
	return controllers;
})();



