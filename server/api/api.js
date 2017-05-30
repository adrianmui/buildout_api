const router = require('express').Router();

router.use('/brokers', require('./brokers/brokerRoutes'));

router.use('/properties', require('./properties/propertyRoutes'));


module.exports = router;