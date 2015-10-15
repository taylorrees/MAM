
var mongoose = require("mongoose");

// Define the lecture schema.

var lecture_schema = new mongoose.Schema({

  timestamp: {type: Date, default: Date.now },
  student_number: [Number]

});

module.exports.lecture_schema = lecture_schema;
