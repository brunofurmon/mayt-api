const Router = require('koa-router');

module.exports = ({ healthCheckController }) => {
    const router = new Router();

    // Welcome
    router.get('/', async ctx => {
        ctx.body = 'MAYT - Mate, Are you there?';
    });

    router.get('/healthcheck', healthCheckController.healthCheck);

    return router;
};