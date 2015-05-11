String.prototype.endsWith = function(test) {
	return this.length >= test.length && this.substr(this.length - test.length) == test;
}