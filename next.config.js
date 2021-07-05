const path = require('path');

module.exports = {
    experimental: {
        scrollRestoration: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};