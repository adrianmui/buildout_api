const router = require('express').Router();

router.use('/brokers', require('./brokers/brokerRoutes'));

router.use('/properties', require('./properties/propertyRoutes'));

router.use('/spaces', require('./spaces/spaceRoutes'));

module.exports = router;