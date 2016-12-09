var express = require('express');
var app = express();

var http = require('http').Server(app);

var io = require('socket.io')(http);


io.on('connection', function(socket){
	console.log ('A connection was opened');

	io.on('kyrpa', function() {
		console.log('Unity stuck a dick in me');
	});

});


var port = process.env.PORT || 3000;
http.listen(port);
console.log ('Node server listening on ' + port);