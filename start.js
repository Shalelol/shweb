var http = require('http');

var router = require('./router.js');
var controllers = require('./Controllers/controllers.js');

http.createServer(router(controllers)).listen(80);