import path from 'path';

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: './dist', //配置webpack dev server的源
    //hot: true, //webpack4默认启动了热更新
    proxy: { //实现请求转发，这样请求url就不用写全了，直接写相对路径
      '/api/testnet': {
        target: 'https://testnet.com/',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true //有些服务器限制了origin,
      }
    }
  },
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env', //预处理js语法
                {
                  useBuiltIns: 'usage', //让babel/polyfill按需添加
                }
              ],
            ]
          }
        }
      },
      {
        test: /.(jpg|png|gif)$/,
        use: {
          loader: 'file-loader', //使webpack能够import图片
          options: {
            // 占位符 placeholder
            name: '[name]_[hash].[ext]',
            outputPath: 'images/'
          }
        }
      },
      {
        test: /.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader', // 使webpack能够将图片转成base64
          options: {
            // 占位符 placeholder
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 2048 //单位字节
          }
        }
      },
      {
        test: /.css$/,
        use: [
          'style-loader', //将css-loader解析后的内容挂载到html页面的style标签中
          {
            loader: 'css-loader', //解析.css文件
            options: {
              modules: true //启用模块化，将导出的css名称取hash，避免重名
            }
          },
          'postcss-loader', // 加上厂商前缀
          'sass-loader' //解析.scss文件
        ]
      },
      {
        test: /.(eot|svg|ttf|woff)$/,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      cache: false
    }),
    new CleanWebpackPlugin()
  ]
};
