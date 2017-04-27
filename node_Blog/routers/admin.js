const express = require('express');
const router = express.Router();
const User = require('../models/User');

//只有管理员才能进入后台管理页
router.use(function(req, res, next) {
	if(!req.userInfo.isAdmin) {
		res.send('对不起，只有管理员才能进入后台管理页面！');
	}
	next();
});

// 后台管理---首页
router.get('/', function (req, res, next) {		
	res.render('admin/index.html', {
		userInfo: req.userInfo
	});
});

// 后台管理---用户管理，分页显示用户列表
// limit(Number)限查找的条数制
// skip(Number)要跳过的条数
router.get('/user', function (req, res, next) {	
	let page = Number(req.query.page || 1);
	const limitNum = 2;
	let skipNum;
	let totalPage;
	// page应该大于0，小于总页数
	User.count().then(function(count) {
		totalPage = Math.ceil(count / limitNum);
		if(page > totalPage) {
			page = totalPage;
		}
		if(page < 1) {
			page = 1;
		}	
		skipNum = (page - 1) * limitNum;
		User.find().limit(limitNum).skip(skipNum).then(function(users) {				
			res.render('admin/user_index.html', {
				userInfo: req.userInfo,
				users: users,
				page: page,
				totalPage: totalPage,				
			});
		});
	});
})


module.exports = router;
