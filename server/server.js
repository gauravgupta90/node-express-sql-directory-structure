var express = require('express'),
    config = require('./config/config'),
    Db = require('./config/db'),
    bodyParser = require('body-parser');
    
var app = express();	// create express server

app.use(express.static(__dirname + '/../client/src'));	// load client index.html on server start on browser

app.use(bodyParser())	// middleware responsible for request data parsing 

require('./routes')(app);	// loads routes available in a file route.js

var port = config.server.port;	// get port number where server should run from configuaration file

app.listen(port);	// make express server listen at specific port

console.log('App started on port ' + port);
