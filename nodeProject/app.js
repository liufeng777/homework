const express = require('express');
// process是全局变量，端口号可以是获取环境变量或者默认3000
const port = process.env.PORT || 3000; 
const app = express(); //启动web服务器

app.set('views', './views'); // 设置视图根目录
app.set('view engine', 'jade'); // 设置模板引擎
app.listen(port);

console.log('project started on port ' + port);

// 路由
app.get('/', function(req, res) {
	res.render('index', {
		title: 'project 首页'
	})
})

app.get('/movie/:id', function(req, res) {
	res.render('detail', {
		title: 'project 详情页'
	})
})

app.get('/admin/list', function(req, res) {
	res.render('list', {
		title: 'project 列表页'
	})
})

app.get('/admin/movie', function(req, res) {
	res.render('admin', {
		title: 'project 后台管理页'
	})
})