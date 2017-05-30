const express = require('express');
const path = require('path');
const api = require('./api/api');

const app = express();
app.set('view engine', 'ejs');

//prepackaged middleware
require('./../middleware')(app);

// api
app.use('/api', api);

app.get('/', function(req, res) {
    res.send(`elastic beanstalk works!`);
});

module.exports = app;