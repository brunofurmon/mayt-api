const { APP_PREFIX } = process.env;

module.exports = () => {
    const cyan = '\x1b[36m%s\x1b[0m';
    const yellow = '\x1b[33m%s\x1b[0m';
    const red = '\x1b[31m%s\x1b[0m';

    const prefix = () => {
        return `  ${APP_PREFIX}:(${(new Date()).toISOString()}):`;
    };

    const info = (...args) => {
        console.info(cyan, prefix(), ...args);
    };

    const warn = (...args) => {
        console.warn(yellow, prefix(), ...args);
    };

    const error = (...args) => {
        console.error(red, prefix(), ...args);
    };

    return {
        info,
        warn,
        error
    };
};