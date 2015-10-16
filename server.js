// Server configuration.

var express = require('express');
var mongoose = require('mongoose');
var api_routes = require('./routes/api_routes');
var app = express();

// Open database connection.

mongoose.connect('mongodb://localhost/MAM')

// Handle all api specific requests through the api route.

app.use('/api', api_routes);

// Start the server and listen for connection.

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});
