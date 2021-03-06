// 加载express模块
const express = require('express');
// 加载模板模块swig
const swig = require('swig');
// 加载数据库模块
const mongoose = require('mongoose');
// 加载body-parser模块，用来处理post来的数据
const bodyParser = require('body-parser');
//加载cookies模块，用来记录用户登录信息
const Cookies = require('cookies');
// 加载数据库User
const User = require('./models/User');

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

// bodyParser设置,bodyParser.urlencoded()用来处理post传来的数据，会在request对象上加上一个body属性,保存着post提交的数据
app.use(bodyParser.urlencoded({ extended: true })); // 注bodyParser必须写在路由的前面

// 设置cookies
app.use(function(req, res, next) {
	req.cookies = new Cookies(req, res);
	// 获取cookie，并改为对象形式
	req.userInfo = {};
	if(req.cookies.get('userInfo')) {
		try {
			req.userInfo = JSON.parse(req.cookies.get('userInfo'));

			// 获取当前用户类型
			User.findById(req.userInfo._id).then(function(userInfo) {
				req.userInfo.isAdmin = Boolean(userInfo.isAdmin);
				next();
			});
		} catch(e) {
			next();
		}
	} else {
		next();
	}	
});

// 分模块管理：前台页面模块、后台管理模块、ajax请求接口的API模块
app.use('/', require('./routers/main'));
app.use('/admin', require('./routers/admin'));
app.use('/api', require('./routers/api'));

// 链接数据库
mongoose.connect('mongodb://localhost:27018/blog', function (err) {
	if(err) {
		console.log('数据库链接失败！' + err);
	} else {
		console.log('数据库链接成功！');
		// 监听http请求
		app.listen(8080);
	}
});

