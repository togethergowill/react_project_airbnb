const CracoLessPlugin = require("craco-less")
const path = require('path')

const resolve = (pathname) => path.resolve(__dirname, pathname)

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin
    }
  ],
  webpack: {
    alias: {
      "@": resolve('src')
    }
  }
}