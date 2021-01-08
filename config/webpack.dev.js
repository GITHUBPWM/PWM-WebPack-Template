/* 开发环境需要的配置 */

const path = require('path');        //node内置path模块，该模块主要集成文件系统路径操作API
const {merge} = require('webpack-merge');//合并配置对象
const baseConfig = require('./webpack.base');


module.exports = merge(baseConfig,{
  mode: 'development',
  devServer:{  //webpack-dev-server配置（仅开发环境需要）
    contentBase: path.join(__dirname, './dist'),//编译打包文件的位置
    publicPath: '/',
    port:8089,
    host:'127.0.0.1',
    proxy:{},   //代理列表
    compress: true,
    historyApiFallback: true,  //开启服务器history重定向模式
  },
  plugins: [
    
  ]


})
