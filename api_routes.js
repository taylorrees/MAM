// This file is responsible for all api specific routes.

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Hello')
});

// Export the routes.

module.exports = router;
