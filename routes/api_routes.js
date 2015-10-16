/*
  This file is responsible for all api specific routes.
  All API routes can be found in individual files located at
  the path: /api/<param_param>.js
*/

var express = require('express');
var router = express.Router();


// Request: POST

router.post('/lectures/add', require('./api/lectures_add'));
router.post('/lectures/destroy/:id', require('./api/lectures_destroy_id'));
router.post('/lectures/update/:id', require('./api/lectures_update_id'));

// Request: GET

router.get('/lectures/find', require('./api/lectures_find'));
router.get('/lectures/find/:id', require('./api/lectures_find_id'));


// Export the routes.

module.exports = router;
