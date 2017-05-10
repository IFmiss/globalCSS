var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer')({broswers: ['last 5 versions']});

var path = require('path');

module.exports = {
	entry:{
		main:'./src/js/main.js',
		a:'./src/js/a.js',
		// b:'./src/js/b.js',
		c:'./src/js/c.js',
	},
	output:{
		path: path.join(__dirname, "dist"),
		// filename:'js/[name]-[chunkhash].js',
		filename:'js/[name].js'
		// publicPath:'http:www.daiwei.org/'
	},

	module: {
  		rules: [
  			{
  				test: /\.js$/,
  				exclude: /node_modules/,
  				loader: "babel-loader",
  				query: {
		          	presets: ['latest'],
		        }
  			},{
				//模板文件用ejs的模板
				test: /\.tpl$/,
	        	use: [ 'ejs-loader']
			},
  			{
  				test: /\.css$/,
        		use: [ 'style-loader', 'css-loader' ]
  			},

  			{
  				test: /\.html$/,
  				loader:'html-loader',
  			},

  			{
  				test: /\.scss$/,
  				use: [{
					loader: 'style-loader'
				},{
					loader: 'css-loader',
					//设置cssloader后面加入的loader数
					// options: {
					// 	importLoaders: 1
					// }
				},{
					loader: 'postcss-loader'
				},{
					loader: 'sass-loader'
				}]
  			},{
		        test: /\.(png|jpg|gif|svg)$/,
		        loader: 'url-loader',
		        options: {
		          limit: 10000
		        }
		    },

  			{
			    test: /\.(eot|ttf|woff|woff2|svg)$/,
			    loader: 'url-loader',
			    options: {
			       name: 'fonts/[name].[ext]?[hash]',
			       limit: 10000
			    }
			}
  		],
  	},

  	devServer: {
	  contentBase: path.join(__dirname, "dist"),
	  compress: true,
	  port: 9000
	},

	plugins:[
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: function(){
					return [autoprefixer];
				}
			}
		}),
		new HtmlWebpackPlugin({
			filename:'testColor.html',
			template:'src/testColor.ejs', 
			title:'通用样式库',
			inject:'body',    //js存放位置 body 内部    head头部   false不往index中写
			// date:new Date(),
			// chunks:['main','b'],
			excludeChunks:['a','b','c'],
			favicon:'./src/image/logo/favicon.ico',
			showErrors:true,   // 显示当前错误信息
		}),
	]
}

