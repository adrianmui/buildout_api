const router = require('express').Router();
const controller = require('./brokerController');

// setup boilerplate route jsut to satisfy a request
// for building
// router.param('id', controller.params);

router.route('/')
    .get(controller.get);

// router.route('/:id')
//     .get(controller.getOne);

module.exports = router;