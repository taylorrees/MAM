// This file is responsible for all api specific routes.

var express = require('express');
var router = express.Router();

router.post('/lectures/add', require('./routes/api/lectures_add'));
router.post('/lectures/destroy/:id', require('./routes/api/lectures_destroy_id'));
router.post('/lectures/update/:id', require('./routes/api/lectures_update_id'));

router.get('/lectures/find', require('./routes/api/lectures_find'));
router.get('/lectures/find/:id', require('./routes/api/lectures_find_id'));


// Export the routes.

module.exports = router;
