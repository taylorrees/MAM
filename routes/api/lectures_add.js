/*
  Request: POST
  File: lectures_add.js
  Route: /api/lectures/add
*/


// Require the Lecture model.
var Lecture = require('../../models.js').Lecture;

module.exports = function(req, res) {
  /*
    Adds a new lecture to the authenticating users datastore.
    Lectures are added following the structure specified within the
    lecture model.
  */

  // Create a new lecture.
  var lecture = new Lecture();

  // Set the student_numbers value of the lecture.
  lecture.student_numbers = req.body.student_numbers;

  lecture.save(function(err){

    if (err) {
      console.error(err);
      res
        .status(400)
        .end()
    }

    if (!err) {
      console.log('Lecture added.');
      res
        .status(200)
        .end()
    }

  });

}
