require('./Utils/keys.js');

var shtemplate =  function(template) {
	this.template = template;
	return this;
};

shtemplate.prototype.run = function (obj) {
	var keys = obj.keys(),
		result = this.template;

	for(var i = 0; i < keys.length; i++) {
		var regex = new RegExp('{{' + keys[i] + '}}', 'g');
		result = result.replace(regex, obj[keys[i]]);
	}

	return result;
};

module.exports = shtemplate;