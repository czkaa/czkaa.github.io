module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/czkaa.github.io/" : "/",
  devServer: {
        proxy: 'http://localhost:8080/#/',
    },
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack')({ /* options */ }),
    ],
  },
}
