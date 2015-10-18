// Server configuration.

var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var api_routes = require('./routes/api_routes');
var app = express();

// Set the application port.
app.set('port', (process.env.PORT || 5000));

// Open database connection.
// Database connection uri is located in /config/mongodb.js
var connection_uri = process.env.MONGOLAB_URI || require('./config/mongodb').connection_uri
mongoose.connect(connection_uri)

app.use(body_parser.json());
// Handle all api specific requests through the api route.
app.use('/api', api_routes);

// Start the server and listen for connection.

var server = app.listen(app.get('port'), function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});
