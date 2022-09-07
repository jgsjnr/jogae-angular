const PROXY_CONFIG = [
    {
        context: ['/'],
        target: 'http://152.67.44.32:8080/',
        secure: false,
        loglevel: 'debug'
    }
]

module.exports = PROXY_CONFIG;