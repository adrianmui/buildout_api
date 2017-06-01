const request = require('request');
const TOKEN = require('./../../../config').API_KEY;

let stub = {};

stub.params = function(req, res, next, id) {
    request(`https://buildout.com/api/v1/${TOKEN}/lease_spaces/${id}.json`, function(error, response, body) {
        if (error) {
            next(error);
        } else {
            req.spaces = body;
            next();
        }
    });
};

stub.get = function(req, res, next) {
    request(`https://buildout.com/api/v1/${TOKEN}/lease_spaces.json?limit=120`, function(error, response, body) {
        if (error) {
            next(error);
        } else {
            res.send(JSON.parse(body).lease_spaces);
        }
    });
};

stub.getOne = function(req, res, next) {
    let spaces = JSON.parse(req.spaces);
    if (!spaces.lease_space) {
        let err = new Error(`item not found`);
        err.status = 500;
        next(err);
    }
    res.send(spaces.lease_space);
};

module.exports = stub;