require('dotenv/config');

const container = require('./container');

const server = container.resolve('server');

server.start();