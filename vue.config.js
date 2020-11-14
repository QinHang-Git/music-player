module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target:'https://music.163.com/api',
        changeOrigin: true,
        logLevel: 'debug',
        ws: true,
        pathRewrite: {
            '^/api': ''
        }
      }
    }
  },
}
