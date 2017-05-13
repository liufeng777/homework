module.exports = {
	// 入口文件
	entry: "./runoob1.js",
	// 输出文件
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module: {
		// 加载器
		loaders: [
			// css文件用css-loader和style-loader
			{ test: /\.css$/, loader: "style-loader!css-loader"},	
			//.js 文件使用 jsx-loader 来编译处理
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            // 图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            // 即超过8kb的才使用 url-loader 来映射到文件，否则转为data url形式
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}			
		]
	}
}
