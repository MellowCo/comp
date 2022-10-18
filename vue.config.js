const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'examples/main.js',
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://xxxxxxxxxxx',
        changeOrigin: true
      }
    }
  },
})
