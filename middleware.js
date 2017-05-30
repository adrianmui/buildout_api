const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const override = require('method-override');
// setup global middleware here

const errware = require('./middleware/errware');

//something funny
function sayAdrian(req, res, next) {
    console.log('hi friend my name is Adrian');
    next();
}

module.exports = function(app) {
    app.use(morgan('combined'));
    app.use(sayAdrian);
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors());
    app.use(override());
    app.use(errware);
};