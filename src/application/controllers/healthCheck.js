const { OK, INTERNAL_SERVER_ERROR } = require('http-status');

module.exports = () => {
    const healthCheck = async (ctx) => {
        const everythingIsOk = true;

        const status = everythingIsOk ? OK : INTERNAL_SERVER_ERROR;
        const body = everythingIsOk ? 'OK' : 'KO';

        ctx.status = status;
        ctx.body = body;
    };

    return { healthCheck };
};
