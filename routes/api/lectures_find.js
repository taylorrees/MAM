/*
  Request: GET
  File: lectures_find.js
  Route: /api/lecture/find
*/


// Require the Lecture model.
var Lecture = require('../../models.js').Lecture;

module.exports = function(req, res) {
  /*
    Finds all lectures within the authenticating users datastore
    and returns them as individual JSON objects.
  */

  Lecture.find({}, function (err, lectures) {

    if (err) {
      console.error(err);
      res
        .status(400)
        .end()
    }

    if (lectures) {
      res
        .json(lectures)
        .status(200)
        .end()
    }

  });

}
