const request = require('request');
const TOKEN = require('./../../../config').API_KEY;

let stub = {};

stub.params = function(req, res, next, id) {
    request(`https://buildout.com/api/v1/${TOKEN}/properties/${id}.json`, function(error, response, body) {
        if (error) {
            next(error);
        } else {
            req.property = body;
            next();
        }
    });
};

stub.get = function(req, res, next) {
    request(`https://buildout.com/api/v1/${TOKEN}/properties.json?limit=12`, function(error, response, body) {
        if (error) {
            next(error);
        } else {
            res.send(body);
        }
    });
};

stub.getOne = function(req, res, next) {
    let property = req.property;
    if (!property.property) {
        let err = new Error(`item not found`);
        err.status = 500;
        next(err);
    }
    res.send(property);
};

module.exports = stub;