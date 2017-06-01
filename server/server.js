const express = require('express');
const path = require('path');
const api = require('./api/api');

const app = express();
app.set('view engine', 'ejs');

//prepackaged middleware
require('./../middleware')(app);

// api
app.use('/api', api);

// home interface page
app.get('/', function(req, res) {
    res.render(path.join(`${__dirname}/pages/index`));
});

module.exports = app;