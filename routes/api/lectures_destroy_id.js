/*
  Request: POST
  File: lectures_destroy_id
  Route: api/lectures/destroy/:id
*/


// Require the Lecture model.
var Lecture = require('../../models.js').Lecture;

module.exports = function(req, res) {
  /*
    Removes a lecture from the authenticating users datastore.
    Uses the lecture id in order to remove a unique record by the
    id specified within the request URL.
  */

}
