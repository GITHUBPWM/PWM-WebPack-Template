/*  这个文件是生产环境和开发环境都要用到的  */

const HtmlWebpackPlugin = require('html-webpack-plugin')//通过 npm 安装
const path = require('path');        //node内置path模块，该模块主要集成文件系统路径操作API
const { resolve } = require('path');

const config = {
  mode: 'development', //webpack打包的模式，生产/发布
  entry: { //js的入口文件，支持多入口 ，这种就是多入口写法
    main: path.resolve(__dirname,'../src/index.js')
  },
  output: {//js打包压缩后的出口文件，多入口时对应的配置应做相对变化
    path: path.resolve(__dirname,'../dist'),
    filename: 'bundle.js'//打包输出的js文件名
  },
  module: {
    rules: [// 配置loder使用的规则、作用范围、控制输出的名称、位置等；主要作用是编译，解析文件
      {
        test: /\.css$/,// 正则匹配以.css结尾的文件
        use: ['style-loader', 'css-loader']
      },{
        test: /\.js$/,
        loader:'babel-loader',
        include:[resolve('src')]
      },{
        test:/\.(htm|html)$/,
        use: ['raw-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})  //根据项目提供HTML模板，生成新页面，并将对应的输出打包压缩输出的js，链接到页面中；注意这里的路径不是../src/index.html，因为这个打包是在根目录下进行的
  ]

};

module.exports = config;