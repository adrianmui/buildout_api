const logger = require('logger');

function errorHandler(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Invalid token');
        return;
    }

    logger.error(err.stack);
    res.status(500).send('Oops');
};

module.exports = errorHandler;