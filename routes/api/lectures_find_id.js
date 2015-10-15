/*
  Request: GET
  File: lectures_find_id.js
  Route: /api/lectures/find/:id
*/


// Require the Lecture model.
var Lecture = require('../../models.js').Lecture;

module.exports = function(req, res) {
  /*
    Finds an individual lecture within the authenticating users datastore.
    Uses the lecture id specified within the request URL to query the
    datastore, returning the resulting lecture as a JSON object.
  */

}
