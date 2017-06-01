// intro point for our server.
// PRO-TIP: if you have an index.js file
// on the root of a folder in node
// you can just require that folder and node will
// automatically require the index.js on the root

// setup config first before anything by requiring it
const port = require('./config').port || 3000;
const app = require('./server/server');
const http = require('http');

http.createServer(app).listen(port, function() {
    console.log(`listening on http://localhost: ${port}`);
});