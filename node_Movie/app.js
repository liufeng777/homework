const express = require('express');
const path = require('path');
// process是全局变量，端口号可以是获取环境变量或者默认3000
const port = process.env.PORT || 3000; 
const app = express(); //启动web服务器
const bodyParser = require('body-parser');

app.set('views', './views/pages'); // 设置视图根目录
app.set('view engine', 'jade'); // 设置模板引擎
app.use(bodyParser()); // 格式化表单数据
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.listen(port);

console.log('project started on port ' + port);

// 路由
app.get('/', function(req, res) {
	res.render('index', {
		title: 'project 首页',
		movies: [{
			title: '三傻大闹宝莱坞',
			_id: 1,
			poster: '/3idiots.jpg'
		}, {
			title: '三傻大闹宝莱坞',
			_id: 2,
			poster:'/3idiots.jpg'
		}, {
			title: '三傻大闹宝莱坞',
			_id: 3,
			poster:'/3idiots.jpg'
		}, {
			title: '三傻大闹宝莱坞',
			_id: 4,
			poster:'/3idiots.jpg'
		}]
	})
})

app.get('/movie/:id', function(req, res) {
	res.render('detail', {
		title: 'project 详情页',
		movie: {
			title: "三傻大闹宝莱坞",
			doctor: "拉库马.希拉尼",
			country: "印度",
			year: "2009年",
			language: "英语",
			poster: '/3idiots.jpg',
			flash: "http://www.iqiyi.com/dianying/20120618/f0faf21d5f12f65e.html?vfm=2008_aldbd",
			summary: "法罕、拉加和兰彻是同寝的大学同学，他们都在印度的著名学府帝国工业大学就读。法罕其实并不想学工业设计，他想成为一名野外摄影师；拉加的家庭十分贫困，他的家人希望莱吉毕业后能找个好工作以改善家庭的经济状况；而兰彻的身世一直是一个谜。这个谜要到他们毕业十年之后才能揭晓。"
		}
	})
})

app.get('/admin/list', function(req, res) {
	res.render('list', {
		title: 'project 列表页',
		movies: [{
			title: "三傻大闹宝莱坞",
			doctor: "拉库马.希拉尼",
			country: "印度",
			year: "2009年",
			language: "英语",
			poster: '/3idiots.jpg',
			flash: "http://www.iqiyi.com/dianying/20120618/f0faf21d5f12f65e.html?vfm=2008_aldbd",
			summary: "法罕、拉加和兰彻是同寝的大学同学，他们都在印度的著名学府帝国工业大学就读。法罕其实并不想学工业设计，他想成为一名野外摄影师；拉加的家庭十分贫困，他的家人希望莱吉毕业后能找个好工作以改善家庭的经济状况；而兰彻的身世一直是一个谜。这个谜要到他们毕业十年之后才能揭晓。"
		}]
	})
})

app.get('/admin/movie', function(req, res) {
	res.render('admin', {
		title: 'project 后台管理页',
		movie: {
			title: '',
			doctor: '',
			country: '',
			language: '',
			year: '',
			poster: '',
			flash: '',
			summary: ''
		}
	})
})