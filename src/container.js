const { createContainer, asFunction } = require('awilix');

const loggerFactory = require('./infrastructure/logger/loggerFactory');

const serverFactory = require('./application/server');
const routerFactory = require('./application/router');

const healthCheckControllerFactory = require('./application/controllers/healthCheck');

const container = createContainer();

container.register({
    logger: asFunction(loggerFactory).singleton(),
    healthCheckController: asFunction(healthCheckControllerFactory).scoped(),
    server: asFunction(serverFactory).singleton(),
    router: asFunction(routerFactory).singleton()
});

module.exports = container;
