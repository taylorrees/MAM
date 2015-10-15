// This file is responsible for all api specific routes.

var express = require('express');
var router = express.Router();

router.post('/lectures/add', function(req, res) {
  /*
    Adds a new lecture to the authenticating users datastore.
    Lectures are added following the structure specified within the
    lecture model.
  */

});

router.post('/lectures/destroy/:id', function(req, res) {
  /*
    Removes a lecture from the authenticating users datastore.
    Uses the lecture id in order to remove a unique record by the
    id specified within the request URL.
  */

});

router.post('/lectures/update/:id', function(req, res) {
  /*
    Updates a lecture in the authenticating users datastore.
    Uses the lecture id in order to update a unique record by the
    id specified within the request URL.
  */

});

router.get('/lectures/find', function(req, res) {
  /*
    Finds all lectures within the authenticating users datastore
    and returns them as individual JSON objects.
  */

});

router.get('/lectures/find/:id', function(req, res) {
  /*
    Finds an individual lecture within the authenticating users datastore.
    Uses the lecture id specified within the request URL to query the
    datastore, returning the resulting lecture as a JSON object.
  */

});

// Export the routes.

module.exports = router;
