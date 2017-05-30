const router = require('express').Router();

router.use('/brokers', require('./brokers/brokerRoutes'));


module.exports = router;