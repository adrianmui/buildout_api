const request = require('request');
const TOKEN = require('./../../../config').API_KEY;

let stub = {};

stub.get = function(req, res, next) {
    request(`https://buildout.com/api/v1/${TOKEN}/brokers.json`, function(error, response, body) {
        if (error) {
            next(error);
        } else {
            res.send(JSON.parse(body).brokers);
        }
    });
};

module.exports = stub;