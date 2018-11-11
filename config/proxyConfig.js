module.exports = {
    proxy: {
          '/api/aAPI.ashx': {    
              target: 'http://www.9kuaiz.com/',  // 接口域名
              secure: false,  // 如果是https接口，需要配置这个参数
              changeOrigin: true,  //是否跨域
              pathRewrite: {
                  '^/api/': '^/'   //需要rewrite的,
              }              
          }
    }
  }