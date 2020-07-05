module.exports = () => {
    const info = (...args) => {
        console.info(...args);
    };

    const warn = (...args) => {
        console.warn(...args);
    };

    const error = (...args) => {
        console.error(...args);
    };

    return {
        info,
        warn,
        error
    };
};