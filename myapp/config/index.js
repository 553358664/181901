'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      "/api":{
    		target:"https://www.easy-mock.com",
    		changeOrigin:true,
    		pathRewrite:{
    		    "^/api":""
    		}
    	}
      
      //模拟数据 easy-mock ——liuna
      //https://www.easy-mock.com/mock/5c37efe8c0c3ac784264cd1c/example/my
<<<<<<< HEAD
      "/my":{
        target:"https://www.easy-mock.com",
        changeOrigin:true,
        pathRewrite:{
          "^/my":""
        }
      },
        //接入图灵机器人
        //http://openapi.tuling123.com/openapi/api/v2?key=430a4686bbbb417f891a24ccf16728ca&userid=1&info=%2211%22
        "/chat":{
          target:"http://www.tuling123.com",
          changeOrigin:true,
          pathRewrite:{
            "^/chat":""
          }
        }
  
=======
      // "/my":{
      //   target:"https://www.easy-mock.com",
      //   changeOrigin:true,
      //   pathRewrite:{
      //     "^/my":""
      //   }
      // }

>>>>>>> 6c80a95b6ca760a0c4e2ce758012e4628e97a080

  },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    //192.168.43.178
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
