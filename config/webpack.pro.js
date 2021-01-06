/* 生产环境需要的配置 */ 

const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  mode:'production'
})