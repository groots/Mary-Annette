var express = require('express');
var http = require('http');
var app = express();

// var options = {
// 	http : 'http://github.com',
// 	path: 'username'
// }

app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 3000);