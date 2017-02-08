// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, 'docs/index.html'),
    assetsRoot: path.resolve(__dirname, 'docs'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/make-me-rich/',
    productionSourceMap: true
  },
  dev: {
    port: 8080,
    proxyTable: {}
  }
}
