
var mongoose = require("mongoose");
// Require the lecture schema.
var lecture_schema = require("./schemas.js").lecture_schema;

// Create and export the lecture model.

module.exports.Lecture = mongoose.model('Lecture', lecture_schema);
