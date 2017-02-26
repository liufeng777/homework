const express = require('express');
const path = require('path');
// process是全局变量，端口号可以是获取环境变量或者默认3000
const port = process.env.PORT || 3000; 
const app = express(); //启动web服务器

app.set('views', './views/pages'); // 设置视图根目录
app.set('view engine', 'jade'); // 设置模板引擎
app.use(express.static(path.join(__dirname, 'node_modules')));
app.listen(port);

console.log('project started on port ' + port);

// 路由
app.get('/', function(req, res) {
	res.render('index', {
		title: 'project 首页',
		movies: [{
			title: '三傻大闹宝莱坞',
			_id: 1,
			poster: 'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=三傻大闹宝莱坞图片&step_word=&hs=2&pn=11&spn=0&di=139081372980&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=1881314615%2C1177815707&os=1709400656%2C4238756173&simid=4129128089%2C715962111&adpicid=0&lpn=0&ln=1956&fr=&fmq=1488104635007_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic6.qiyipic.com%2Fimage%2F20150319%2F0d%2Fdf%2F34%2Fv_50215691_m_601_m5_480_270.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fojtk5_z%26e3Bv54AzdH3FrAzdH3F8aa8da9mll9%3Frt1f%3DPs_Tit61_Arr__8d%26ujj1_f56p%3Dwss%26ujj1_utspj6%3Dwss&gsm=0&rpstart=0&rpnum=0'
		}, {
			title: '三傻大闹宝莱坞',
			_id: 2,
			poster: 'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=三傻大闹宝莱坞图片&step_word=&hs=2&pn=11&spn=0&di=139081372980&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=1881314615%2C1177815707&os=1709400656%2C4238756173&simid=4129128089%2C715962111&adpicid=0&lpn=0&ln=1956&fr=&fmq=1488104635007_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic6.qiyipic.com%2Fimage%2F20150319%2F0d%2Fdf%2F34%2Fv_50215691_m_601_m5_480_270.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fojtk5_z%26e3Bv54AzdH3FrAzdH3F8aa8da9mll9%3Frt1f%3DPs_Tit61_Arr__8d%26ujj1_f56p%3Dwss%26ujj1_utspj6%3Dwss&gsm=0&rpstart=0&rpnum=0'
		}, {
			title: '三傻大闹宝莱坞',
			_id: 3,
			poster: 'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=三傻大闹宝莱坞图片&step_word=&hs=2&pn=11&spn=0&di=139081372980&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=1881314615%2C1177815707&os=1709400656%2C4238756173&simid=4129128089%2C715962111&adpicid=0&lpn=0&ln=1956&fr=&fmq=1488104635007_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic6.qiyipic.com%2Fimage%2F20150319%2F0d%2Fdf%2F34%2Fv_50215691_m_601_m5_480_270.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fojtk5_z%26e3Bv54AzdH3FrAzdH3F8aa8da9mll9%3Frt1f%3DPs_Tit61_Arr__8d%26ujj1_f56p%3Dwss%26ujj1_utspj6%3Dwss&gsm=0&rpstart=0&rpnum=0'
		}, {
			title: '三傻大闹宝莱坞',
			_id: 4,
			poster: 'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=三傻大闹宝莱坞图片&step_word=&hs=2&pn=11&spn=0&di=139081372980&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=1881314615%2C1177815707&os=1709400656%2C4238756173&simid=4129128089%2C715962111&adpicid=0&lpn=0&ln=1956&fr=&fmq=1488104635007_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic6.qiyipic.com%2Fimage%2F20150319%2F0d%2Fdf%2F34%2Fv_50215691_m_601_m5_480_270.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fojtk5_z%26e3Bv54AzdH3FrAzdH3F8aa8da9mll9%3Frt1f%3DPs_Tit61_Arr__8d%26ujj1_f56p%3Dwss%26ujj1_utspj6%3Dwss&gsm=0&rpstart=0&rpnum=0'
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
			poster: 'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=三傻大闹宝莱坞图片&step_word=&hs=2&pn=11&spn=0&di=139081372980&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=1881314615%2C1177815707&os=1709400656%2C4238756173&simid=4129128089%2C715962111&adpicid=0&lpn=0&ln=1956&fr=&fmq=1488104635007_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic6.qiyipic.com%2Fimage%2F20150319%2F0d%2Fdf%2F34%2Fv_50215691_m_601_m5_480_270.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fojtk5_z%26e3Bv54AzdH3FrAzdH3F8aa8da9mll9%3Frt1f%3DPs_Tit61_Arr__8d%26ujj1_f56p%3Dwss%26ujj1_utspj6%3Dwss&gsm=0&rpstart=0&rpnum=0',
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
			poster: 'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=三傻大闹宝莱坞图片&step_word=&hs=2&pn=11&spn=0&di=139081372980&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=1881314615%2C1177815707&os=1709400656%2C4238756173&simid=4129128089%2C715962111&adpicid=0&lpn=0&ln=1956&fr=&fmq=1488104635007_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic6.qiyipic.com%2Fimage%2F20150319%2F0d%2Fdf%2F34%2Fv_50215691_m_601_m5_480_270.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fojtk5_z%26e3Bv54AzdH3FrAzdH3F8aa8da9mll9%3Frt1f%3DPs_Tit61_Arr__8d%26ujj1_f56p%3Dwss%26ujj1_utspj6%3Dwss&gsm=0&rpstart=0&rpnum=0',
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