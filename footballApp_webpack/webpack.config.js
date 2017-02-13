module.exports = {
	entry:__dirname+'/src/scripts/app.js',
	devtool:'source-map',
	output:{
		path:__dirname+'/prd/',
		filename:'boudle.js'
	},
	module:{
		loaders:[
			{ //编译css
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			//编译js并且让其变es6可识别的代码
			{
				test:/\.js$/,
				loader:'babel-loader'
			},
			//编译sass
			{
			    test: /\.scss$/,
			    loader:'style-loader!css-loader!sass-loader'
			    //loader:ET.extract({fallbackLoader:'style-loader',loader:'css-loader!sass-loader'})
			}
		]
	},
	//服务
	devServer: {
	    contentBase: __dirname+'/prd',//"./public",//本地服务器所加载的页面所在的目录
	    // colors: true,//终端中输出结果为彩色
	    historyApiFallback: true,//不跳转
	    inline: true,//实时刷新
	    port:'2000',
	    host:'localhost'
    }
}