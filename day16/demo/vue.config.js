const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  publicPath: './',
  // 根目录
  productionSourceMap: false,
  // 默认关闭生产环境的资源
  outputDir: 'dist',
  // 放置打包时静态资源文件生成的存放位置 js css img
  assetsDir: 'assets',
  // 本地的环境代理配置
  devServer: {
    port: '9999',
    // 端口号
    host: 'localhost',
    // 默认是否打开浏览器
    open: true,
    // 是都启用https
    https: false
    // proxy:{
    // 	"/api":{
    // 		changeOrigin:true,
    // 		// 默认开启代理模式
    // 		secure:false,
    // 		// 如果是http接口，需要配置该参数
    // 		target:"url",
    // 		// 代理的地址
    // pathRewrite:{
    // 	"^/api":""
    // }
    // 	}
    // }
  }
})
