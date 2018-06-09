const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, '.env'),
});
const server = require('prerender')();
server.use(require('prerender-memory-cache'));
server.start();