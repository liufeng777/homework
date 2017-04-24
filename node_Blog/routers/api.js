const express = require('express');
const router = express.Router();
// 引入数据库模型User
const User = require('../models/User');

// 验证注册信息后返回的格式
let responseData;
router.use(function(req, res, next) {
	responseData = {
		code: 0,
		message: '',		
	};
	next();
});

//用户注册
router.post('/user/register', function (req, res, next) {
	// console.log(req.body);
	const username = req.body.username;
	const password = req.body.password;
	const repassword = req.body.repassword;

	// 用户名不能为空
	if(username === '') {
		responseData.code = 1;
		responseData.message = '用户名不能为空！';
		// 将信息返回给前端
		res.json(responseData);
		return;
	}
	// 密码不能为空
	if(password === '') {
		responseData.code = 2;
		responseData.message = '密码不能为空！';
		// 将信息返回给前端
		res.json(responseData);
		return;
	}
	// 两次密码不一致
	if(password !== repassword) {
		responseData.code = 3;
		responseData.message = '两次密码不一致！';
		// 将信息返回给前端
		res.json(responseData);
		return;
	}
	// 用户名已经被注册，操作数据库，findOne返回promise对象
	User.findOne({
		username: username,
	}).then(function(userInfo) {
		if(userInfo) {
			// 用户名已存在
			responseData.code = 4;
			responseData.message = '该用户已存在！';
			res.json(responseData);
			return;
		}
		// 保存该数据,save()方法是User的实例上的
		const user = new User({
			username: username,
			password: password
		});	
		return user.save();
	}).then(function(newUser) {
		// 注册成功
		// console.log(newUser);
		responseData.message = '注册成功！';
		res.json(responseData);
	})
});

// 用户登录
router.post('/user/login', function(req, res, next) {
	const username = req.body.username;
	const password = req.body.password;
	// 用户名不能为空
	if(username === '') {
		responseData.code = 1;
		responseData.message = '用户名不能为空！';
		// 将信息返回给前端
		res.json(responseData);
		return;
	}
	// 密码不能为空
	if(password === '') {
		responseData.code = 2;
		responseData.message = '密码不能为空！';
		// 将信息返回给前端
		res.json(responseData);
		return;
	}
	// 在数据库中查找对应用户
	User.findOne({
		username: username,
		password: password,
	}).then(function(userInfo) {
		if(!userInfo) {
			responseData.code = 3;
			responseData.message = '用户名或密码错误！';
			res.json(responseData);
			return;
		}
		// 登录成功
		responseData.message = '登录成功！';
		responseData.userInfo = {
			_id: userInfo._id,
			username: userInfo.username,
		};
		res.json(responseData);
	})
})
module.exports = router;