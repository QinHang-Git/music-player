module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  },
  devServer: {
    proxy: {
        '/api': {
            target: 'https://way.jd.com/showapi', //跨越的对应服务器地址
            changeOrigin: true, //允许跨域
            ws: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    }
  }
}
