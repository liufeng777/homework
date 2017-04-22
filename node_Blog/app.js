// 加载express模块
const express = require('express');
// 加载模板模块swig
const swig = require('swig');

// 创建app应用 => NodeJS中的http.createServer();
const app = express();

// 配置应用模板
// 定义应用使用的模板引擎，
// 第一个参数是模板引擎的名称，也是模板文件的后缀;第二个参数是用于解析模板内容的方法
app.engine('html', swig.renderFile);

// 设置模板文件存放的目录,第一个参数必须是views
app.set('views', './views');
// 将上面定义的模板引擎配置到应用当中,第一个参数必须为view engine，第二个参数必须和app.engine中的第一个参数(模板引擎的名称)相同
app.set('view engine', 'html');

// 静态文件托管
// 当用户访问的URL地址以'/public'开始，那么直接返回__dirname + '/public'下的文件
app.use('/public', express.static(__dirname + '/public'));

// 默认情况下将用户请求的数据放入到缓存中，到访问相同路径和模板时，直接从缓存中取数据
// 在开发过程中需要将模板缓存取消
swig.setDefaults({ cache: false });

/*
* 首页
* req request对象，res response对象，next函数
*/
app.get('/', function (req, res, next) {
	// res.send('<h1>欢迎光临我的博客！</h1>')

	/*
	* 读取views目录下的目录文件，并返回到客户端
	* 第一个参数为文件路径，相对于views而言的
	* 第二个参数是传递给模板页面所需要的数据
	*/
	res.render('index');
});

// 监听http请求
app.listen(8080);