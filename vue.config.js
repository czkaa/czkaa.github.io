module.exports = {
  publicPath: '/',
  devServer: {
        proxy: 'http://localhost:8080/#/',
    },
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack')({ /* options */ }),
    ],
  },
}
