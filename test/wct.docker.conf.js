const os = require('os');

module.exports = {
    activeBrowsers: [{
        browserName: "chrome",
        url: "http://selenium-hub:4444/wd/hub"
    }, {
        browserName: "firefox",
        url: "http://selenium-hub:4444/wd/hub"
    }],
    webserver: {
        hostname: process.env.FQDN || os.hostname(),
    },
    plugins: {
        local: false,
        sauce: false,
    }
}
