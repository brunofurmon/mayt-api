const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const compress = require('koa-compress');
const cors = require('@koa/cors');

const { scopePerRequest } = require('awilix-koa');

const helmet = require('koa-helmet');

const { inspect } = require('util');
const { SERVER_PORT } = process.env;

module.exports = ({ router, logger, container }) => {
    const server = new Koa();
    server
        .use(helmet())
        .use(compress())
        .use(cors())
        .use(bodyParser({ enableTypes: ['json'] }))
        .use(scopePerRequest(container))
        .use(router.routes());

    return {
        server,
        start: async () => {
            try {
                server.listen(SERVER_PORT, () => {
                    logger.info(`Server listening on ${SERVER_PORT}`);
                });
            } catch (err) {
                logger.error('Problem initializing application dependencies', { error: inspect(err) });
                process.exit(1);
            }
        }
    };
};