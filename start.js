var http = require('http');

var router = require('./router.js');
var routes = require('./routes.js');

console.log(routes);
//http.createServer(router(routes)).listen(80);