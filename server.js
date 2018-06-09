const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, '.env'),
});
const server = require('prerender')({
    chromeFlags: ['--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222', '--hide-scrollbars']
});
server.use(require('prerender-memory-cache'));
server.start();