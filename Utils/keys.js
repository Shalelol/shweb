Object.prototype.keys = function() {
	var keys = [];
	for(var key in this) {
		if(this.hasOwnProperty(key)) {
			keys.push(key);
		}
	}
	return keys;
}